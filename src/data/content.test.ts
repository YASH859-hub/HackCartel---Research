import test from 'node:test';
import assert from 'node:assert/strict';
import {
  siteConfig,
  researchDirections,
  curriculumModules,
  timelinePhases,
  expectedOutputs,
  selectionSteps,
  faqs,
  corePrinciples,
} from './content';

test('siteConfig adheres to strict programme requirements', () => {
  assert.equal(siteConfig.brandName, 'HackCartel Research');
  assert.equal(siteConfig.programmeName, 'HackCartel Applied AI Research Fellowship');
  assert.equal(siteConfig.tagline, 'Learn deeply. Research rigorously. Build what matters.');
  assert.equal(siteConfig.cohortSize, '20–25 students');
  assert.equal(siteConfig.duration, '16–20 weeks');
  assert.equal(siteConfig.applicationStatus, 'Cohort details coming soon.');
  assert.equal(siteConfig.applicationOpen, false, 'Applications must not claim to be open yet');
});

test('research directions has all 5 required directions with valid slugs', () => {
  assert.equal(researchDirections.length, 5);
  const slugs = researchDirections.map((d) => d.slug);
  assert.deepEqual(slugs, [
    'reliable-ai-agents',
    'grounded-knowledge-systems',
    'efficient-ai',
    'ai-security-evaluation',
    'ai-for-indian-workflows'
  ]);

  for (const direction of researchDirections) {
    assert.equal(direction.status, 'Proposed direction');
    assert.ok(direction.number.length === 2, 'Number must be 2 digits like 01');
    assert.ok(direction.overview.length > 50, 'Overview must be thorough');
    assert.ok(direction.whyItMatters.length > 50, 'Why it matters must be thorough');
    assert.ok(direction.researchQuestions.length >= 3, 'Must have at least 3 research questions');
    // Ensure research questions end with a question mark and represent inquiry
    for (const q of direction.researchQuestions) {
      assert.ok(q.endsWith('?'), `Question should end with ?: "${q}"`);
    }
    assert.ok(direction.possiblePrototypes.length >= 2);
    assert.ok(direction.evaluationMetrics.length >= 2);
    assert.ok(direction.expectedLearning.length >= 3);
  }
});

test('timeline covers 16-week core + optional 4-week extension strictly', () => {
  const nonExtension = timelinePhases.filter((p) => !p.isExtension);
  const extension = timelinePhases.filter((p) => p.isExtension);

  assert.equal(nonExtension.length, 6);
  assert.equal(extension.length, 1);
  assert.equal(extension[0].weeks, 'Optional weeks 17–20');
});

test('curriculum has 4 complete modules', () => {
  assert.equal(curriculumModules.length, 4);
  const ids = curriculumModules.map((m) => m.id);
  assert.deepEqual(ids, [
    'engineering-foundations',
    'ai-systems',
    'research-methods',
    'product-development'
  ]);
});

test('faqs covers all 10 required prompt topics', () => {
  assert.equal(faqs.length, 10);
  const requiredFaqIds = [
    'who-can-apply',
    'prior-research-experience',
    'time-commitment',
    'remote-or-in-person',
    'fee-or-stipend',
    'mentors-available',
    'what-will-i-build',
    'will-work-be-published',
    'who-owns-code-research',
    'when-applications-open'
  ];
  const actualFaqIds = faqs.map((f) => f.id);
  assert.deepEqual(actualFaqIds, requiredFaqIds);
});

test('core principles has all 8 required principles', () => {
  assert.equal(corePrinciples.length, 8);
  const titles = corePrinciples.map((p) => p.title);
  assert.deepEqual(titles, [
    'Start with a real problem',
    'Understand existing work',
    'Compare against a baseline',
    'Test assumptions',
    'Document failures',
    'Build reproducibly',
    'Share credit clearly',
    'Validate usefulness with users'
  ]);
});
