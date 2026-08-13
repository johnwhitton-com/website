import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const slidesUrl =
  "https://docs.google.com/presentation/d/e/2PACX-1vTIyNIauVyEPU0MLmeJFHjyxgp0mjxaiI4JMbD_SYfKWM-De-H9ZnpRsl9xfIMMR1g_RI0zp5-KEED8/pub?start=false&loop=false&delayms=3000&slide=id.g3f99763131f_1_2";

test("homepage is text-only and contains no portfolio redirect", () => {
  const homepage = read("docs/pages/index.mdx");

  assert.match(homepage, /John Whitton/);
  assert.match(homepage, /Engineer\. Architect\. Leader\./);
  assert.match(
    homepage,
    /I design, build, and scale systems across trading systems/,
  );
  assert.doesNotMatch(
    homepage,
    /portfolio\.johnwhitton\.com|<picture>|john-portfolio-hero/,
  );
});

test("Portfolio replaces About in the top navigation", () => {
  const config = read("vocs.config.ts");

  assert.match(config, /text: "Portfolio",\s+link: "\/portfolio"/);
  assert.doesNotMatch(config, /text: "About John"|link: "\/about"/);
  assert.equal(
    existsSync(new URL("../docs/pages/about.mdx", import.meta.url)),
    false,
  );
});

test("Portfolio page contains the requested copy and linked responsive image", () => {
  const portfolio = read("docs/pages/portfolio.mdx");

  assert.match(portfolio, /^# About John$/m);
  assert.match(portfolio, /Hello, I'm John Whitton\./);
  assert.match(portfolio, /## John's Portfolio/);
  assert.ok(portfolio.includes(slidesUrl));
  assert.match(portfolio, /target="_blank"/);
  assert.match(portfolio, /rel="noopener noreferrer"/);
  assert.match(
    portfolio,
    /<source srcSet="\/images\/john-portfolio-hero\.webp" type="image\/webp"/,
  );
  assert.match(
    portfolio,
    /<img[\s\S]*src="\/images\/john-portfolio-hero\.png"[\s\S]*alt="John Whitton's portfolio: Engineer, Architect, and Leader"/,
  );
});

test("Portfolio image assets include the PNG fallback and WebP source", () => {
  assert.equal(
    existsSync(
      new URL("../docs/public/images/john-portfolio-hero.png", import.meta.url),
    ),
    true,
  );
  assert.equal(
    existsSync(
      new URL(
        "../docs/public/images/john-portfolio-hero.webp",
        import.meta.url,
      ),
    ),
    true,
  );
});

test("résumé portfolio link bypasses the redirect hostname", () => {
  const resume = read("docs/pages/resume.mdx");

  assert.doesNotMatch(resume, /portfolio\.johnwhitton\.com/);
  assert.ok(resume.includes(`[Technical Portfolio](${slidesUrl})`));
});
