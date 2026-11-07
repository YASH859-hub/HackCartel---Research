import {
  ResearchDirection,
  CurriculumModule,
  TimelinePhase,
  FaqItem,
  SiteConfig,
} from '../types';

export const siteConfig: SiteConfig = {
  brandName: 'HackCartel Research',
  programmeName: 'HackCartel Applied AI Research Fellowship',
  tagline: 'Learn deeply. Research rigorously. Build what matters.',
  cohortSize: '20–25 students',
  duration: '16–20 weeks',
  coreDuration: '16-week core',
  extensionDuration: 'Optional 4-week extension',
  weeklyCommitment: '10–12 hours per week, to be confirmed',
  teamsStructure: 'Approximately five teams of four to five fellows',
  deliveryMode: 'To be announced',
  dates: 'To be announced',
  applicationStatus: 'Cohort details coming soon.',
  applicationOpen: false,
  contactEmail: null,
  communityUrl: null,
  githubUrl: null,
};

export const researchDirections: ResearchDirection[] = [
  {
    slug: 'reliable-ai-agents',
    number: '01',
    title: 'Reliable AI Agents',
    shortDescription:
      'Investigating how AI systems plan, use tools, recover from errors, and complete tasks consistently.',
    category: 'Agency & Planning',
    status: 'Proposed direction',
    overview:
      'Contemporary autonomous agents often succeed on simple, linear benchmarks but struggle with error recovery, tool call failure loops, and cascading state corruption in multi-step workflows. This research direction explores systematic architectures that constrain state drift, enable self-correction without infinite hallucination cycles, and provide verifiable execution traces for complex tasks.',
    whyItMatters:
      'When software takes real actions—invoking APIs, editing databases, or coordinating multi-step transactions—failure is costly. Most commercial prototypes currently fail unpredictably on step 4 or 5 of an 8-step journey. Developing reliable agent scaffolding is essential before agents can be trusted with non-trivial engineering or operational responsibilities.',
    researchQuestions: [
      'How does explicit state-machine constraint compare against unconstrained prompt-based planning in error recovery rates?',
      'Can lightweight external verifiers detect agent divergence earlier than self-reflective critique loops?',
      'What are the minimum sufficient context snapshots required to recover from tool timeout or API schema changes?',
      'How does deterministic rollback capability affect end-to-end task completion rates across multi-turn agent benchmarks?'
    ],
    possiblePrototypes: [
      'A checkpoint-and-rollback execution runtime for multi-tool LLM workflows.',
      'A benchmark suite testing agent resilience against injected runtime errors and malformed tool responses.',
      'A deterministic sandboxed agent orchestrator with reproducible execution replay.'
    ],
    evaluationMetrics: [
      'Task success rate under synthetic tool fault injection (percentage)',
      'Steps to recovery vs. unrecoverable loop divergence frequency',
      'Token consumption and latency overhead introduced by verification layers',
      'Reproducibility rate across identical seed tasks'
    ],
    expectedLearning: [
      'Structured planning protocols (ReAct, Plan-and-Solve, Hierarchical Task Networks)',
      'Deterministic state management and event-sourced agent architectures',
      'Designing synthetic stress-testing environments for non-deterministic models',
      'Quantifying cost vs. reliability trade-offs in automated workflows'
    ],
    suggestedToolsAndStacks: [
      'Python',
      'AsyncIO',
      'Pydantic / Structured Outputs',
      'Docker sandbox environments',
      'Custom replay traces'
    ]
  },
  {
    slug: 'grounded-knowledge-systems',
    number: '02',
    title: 'Grounded Knowledge Systems',
    shortDescription:
      'Exploring retrieval, evidence verification, citations, and appropriate abstention in AI assistants.',
    category: 'Retrieval & Verification',
    status: 'Proposed direction',
    overview:
      'Retrieval-Augmented Generation (RAG) is commonly deployed as a simple vector similarity lookup followed by generation. In practice, this leads to hallucinated citations, lost nuance in dense technical documentation, and inappropriate confidence when source material does not contain the answer. This direction examines principled evidence extraction, token-level attribution, and calibrated abstention mechanisms.',
    whyItMatters:
      'In research, medicine, policy, and technical domains, an ungrounded answer is dangerous. Users need to know not just an answer, but exactly which sentence in which source supports it, and crucially, when the system simply does not have enough evidence to answer authoritatively.',
    researchQuestions: [
      'How do multi-vector late-interaction retrieval architectures compare against monolithic dense embeddings on domain-specific corpora?',
      'What evaluation frameworks reliably distinguish between genuine factual attribution and superficial citation formatting?',
      'Can calibrated confidence scoring prompt appropriate system abstention without degrading conversational utility on answerable queries?',
      'How do conflicting documents impact model synthesis, and how can uncertainty be communicated transparently to human readers?'
    ],
    possiblePrototypes: [
      'An attribution auditor that highlights supported vs. speculative claims in LLM responses.',
      'A calibrated question-answering pipeline that abstains or requests clarification when source evidence is below a confidence threshold.',
      'A reproducible comparative benchmark of chunking strategies, rerankers, and citation fidelity on complex technical manuals.'
    ],
    evaluationMetrics: [
      'Citation precision and recall (verifiable mapping between claims and source spans)',
      'Abstention calibration score on unanswerable query datasets',
      'Retrieval MRR and nDCG on multi-hop technical queries',
      'Hallucination rate on counter-factual and conflicting source passages'
    ],
    expectedLearning: [
      'Dense and sparse retrieval mechanics (BM25, ColBERT, dense embeddings, hybrid search)',
      'Cross-encoder reranking algorithms and latency trade-offs',
      'Sentence-level claim decomposition and automated factual verification',
      'Calibrated uncertainty estimation and abstention protocols'
    ],
    suggestedToolsAndStacks: [
      'Python',
      'ColBERT / BM25',
      'Vector stores & HNSW indices',
      'RAG Triad & citation evaluation harnesses'
    ]
  },
  {
    slug: 'efficient-ai',
    number: '03',
    title: 'Efficient AI',
    shortDescription:
      'Evaluating how model selection, routing, and system design affect quality, latency, and cost.',
    category: 'Systems & Latency',
    status: 'Proposed direction',
    overview:
      'Defaulting to the largest available model for every user interaction is economically unsustainable and introduces unnecessary latency. This research direction investigates dynamic query routing, tiered distillation, speculative decoding, and local small language models (SLMs) to optimize quality-per-dollar and quality-per-millisecond metrics.',
    whyItMatters:
      'Building useful AI for the majority of the world requires operating within tight latency constraints and fraction-of-a-cent budgets. Practical software engineering demands knowing when a 3-billion-parameter local model suffices and when an expensive frontier model is strictly necessary.',
    researchQuestions: [
      'What features of an incoming query best predict whether a smaller model will match frontier model accuracy?',
      'How does cascading fallback (small model attempt -> automated verification -> large model escalation) compare in cost and latency to static routing?',
      'What are the real-world trade-offs of quantized local SLM execution on consumer-grade hardware vs. cloud API calls?',
      'Can semantic caching significantly reduce inference load without serving stale or misleading responses on dynamic topics?'
    ],
    possiblePrototypes: [
      'A learned query router that classifies task complexity and dispatches to appropriate model tiers.',
      'A transparent benchmark harness measuring end-to-end token latency, cost, and output quality across multiple hosting strategies.',
      'An offline-first desktop assistant combining local quantized inference with selective cloud escalation.'
    ],
    evaluationMetrics: [
      'Cost reduction per 10,000 queries compared to a frontier-only baseline',
      'P95 and P99 latency percentiles across heterogeneous query workloads',
      'Quality degradation rate (win/loss/tie against frontier reference)',
      'Routing accuracy on ambiguous and composite task distributions'
    ],
    expectedLearning: [
      'Inference optimization techniques (quantization, KV-cache management, batching)',
      'Classifier-based and embedding-based query routing architectures',
      'Benchmark design measuring true wall-clock latency and token economics',
      'Deploying and profiling small open models (Ollama, vLLM, llama.cpp)'
    ],
    suggestedToolsAndStacks: [
      'vLLM / llama.cpp',
      'Python & FastHTTP client profiling',
      'Prometheus / Grafana latency probes',
      'Open-weight model evaluation suites'
    ]
  },
  {
    slug: 'ai-security-evaluation',
    number: '04',
    title: 'AI Security and Evaluation',
    shortDescription:
      'Testing AI applications against prompt injection, unsafe tool use, and other reliability failures in controlled environments.',
    category: 'Robustness & Safety',
    status: 'Proposed direction',
    overview:
      'As AI systems are granted browser access, terminal privileges, and database write capabilities, they inherit an entirely new attack surface. Indirect prompt injection, data exfiltration through tool invocation, and jailbreak cascades remain largely unsolved in commercial deployments. This direction develops controlled testing beds and defensive runtime filters.',
    whyItMatters:
      'Security cannot be an afterthought in applied research. Before deploying agentic workflows that parse external websites or user-uploaded documents, builders must know how easily third-party content can hijack execution flow.',
    researchQuestions: [
      'Can structural separation between instructions and untrusted data effectively neutralize indirect prompt injection in autonomous web agents?',
      'What lightweight detector architectures can identify malicious tool parameters with sub-10ms latency overhead?',
      'How resilient are common guardrail frameworks against multi-turn adaptive adversarial prompts?',
      'What automated red-teaming harnesses can generate realistic regression tests for production AI applications?'
    ],
    possiblePrototypes: [
      'A browser-agent sandbox that detects and isolates indirect prompt injection embedded in web pages.',
      'An open-source red-teaming test harness that evaluates AI app security against an updated taxonomy of known attack vectors.',
      'A runtime policy enforcer for tool-calling models that enforces least-privilege capability boundaries.'
    ],
    evaluationMetrics: [
      'Attack success rate (ASR) across standardized injection benchmarks',
      'False positive rate on benign inputs containing technical jargon or code snippets',
      'Runtime latency impact of security evaluation intermediaries',
      'Coverage percentage across the OWASP Top 10 for Large Language Models'
    ],
    expectedLearning: [
      'Threat modeling for LLM applications and agentic systems',
      'Adversarial prompt construction and defense taxonomy',
      'Dual-LLM and detector-based input/output sanitization architectures',
      'Designing reproducible security evaluation datasets and harnesses'
    ],
    suggestedToolsAndStacks: [
      'Python',
      'Playwright / Puppeteer security sandboxes',
      'OWASP LLM benchmark suites',
      'Custom adversarial test generators'
    ]
  },
  {
    slug: 'ai-for-indian-workflows',
    number: '05',
    title: 'AI for Indian Workflows',
    shortDescription:
      'Exploring useful AI systems for multilingual, resource-constrained, and locally relevant workflows.',
    category: 'Multilingual & Local',
    status: 'Proposed direction',
    overview:
      'The vast majority of AI benchmarks and tools are tuned for English-language, high-bandwidth corporate environments. In real Indian workflows—ranging from public sector documentation and legal translation to regional commerce and agrarian advisories—systems encounter mixed-language vernaculars (Hinglish, code-switching), low-resource dialects, noisy scans, and unstable connectivity.',
    whyItMatters:
      'Applied AI is only as valuable as the real problems it solves. Addressing language barriers, document parsing in regional scripts, and low-compute operational realities opens high-impact possibilities for millions of users who are underserved by global Silicon Valley defaults.',
    researchQuestions: [
      'How do open multilingual models perform on code-switched vernacular text compared to standard formal language benchmarks?',
      'Can targeted fine-tuning or specialized retrieval corpora improve accuracy on regional administrative and regulatory documents?',
      'What compression and offline-caching strategies allow useful conversational assistance over low-bandwidth mobile connections?',
      'How can speech-to-text models be adapted to handle heavy regional accents and noisy background acoustic environments?'
    ],
    possiblePrototypes: [
      'A document parsing and summarization assistant for regional government circulars and scheme guidelines.',
      'A code-switched Hinglish query parser that routes vernacular questions to accurate knowledge retrieval indices.',
      'A lightweight offline-first voice query prototype for low-connectivity regional workflows.'
    ],
    evaluationMetrics: [
      'Factual comprehension and translation accuracy on regional dialect benchmarks',
      'Word Error Rate (WER) on code-switched speech and OCR text',
      'Task completion rate with real non-technical users in pilot interviews',
      'Bandwidth footprint and offline functional degradation metrics'
    ],
    expectedLearning: [
      'Multilingual tokenization artifacts and cross-lingual representation challenges',
      'Speech recognition (Whisper / Indic acoustic models) fine-tuning and evaluation',
      'OCR pipelines for Indian scripts (Devanagari, Tamil, Telugu, etc.)',
      'Conducting field usability testing with diverse linguistic user groups'
    ],
    suggestedToolsAndStacks: [
      'Bhashini / IndicTrans / IndicWav2Vec models',
      'Tesseract & custom OCR pipelines',
      'Python & PyTorch',
      'Lightweight edge deployment tools'
    ]
  }
];

export const curriculumModules: CurriculumModule[] = [
  {
    id: 'engineering-foundations',
    title: 'Engineering Foundations',
    subtitle: 'Module 01',
    description:
      'Production engineering practices essential for building reproducible, robust software before introducing AI complexity.',
    topics: [
      'Idiomatic Python & asynchronous programming (AsyncIO)',
      'Git workflows, trunk-based development, and code reviews',
      'RESTful APIs, schema validation (Pydantic / Zod), and contract testing',
      'Data handling, vector serialization, and robust database interfaces',
      'Automated testing suites and reproducible containerized deployments (Docker)'
    ]
  },
  {
    id: 'ai-systems',
    title: 'AI Systems',
    subtitle: 'Module 02',
    description:
      'From fundamentals to system architectures: embeddings, retrieval, language models, and tool integration.',
    topics: [
      'Modern ML fundamentals & transformer architecture intuition',
      'Embedding geometries, similarity metrics, and index structures (HNSW)',
      'Advanced retrieval mechanics: hybrid search, rerankers, and contextual retrieval',
      'Structured generation, function calling, and deterministic tool schemas',
      'Multi-step agent planning, state management, and memory paradigms'
    ]
  },
  {
    id: 'research-methods',
    title: 'Research Methods',
    subtitle: 'Module 03',
    description:
      'Techniques for formulating sharp questions, creating baselines, conducting experiments, and documenting findings.',
    topics: [
      'Critical paper reading and identifying hidden assumptions in published literature',
      'Formulating testable, falsifiable research hypotheses',
      'Building strong non-neural baselines before adopting complex architectures',
      'Experimental design, ablation studies, and variance measurement',
      'Reproducibility protocols, artifact archiving, and rigorous technical writing'
    ]
  },
  {
    id: 'product-development',
    title: 'Product Development',
    subtitle: 'Module 04',
    description:
      'Turning research prototypes into software that real users can understand, operate, and evaluate.',
    topics: [
      'User discovery interviews and extracting ground-truth workflow requirements',
      'Workflow analysis: identifying genuine bottlenecks vs. superficial AI features',
      'User experience design for non-deterministic AI interfaces',
      'Economic modeling: token costs, infrastructure budgets, and scaling realities',
      'Running structured pilot tests and synthesizing quantitative user feedback'
    ]
  }
];

export const timelinePhases: TimelinePhase[] = [
  {
    weeks: 'Weeks 1–3',
    title: 'Foundations and problem discovery',
    focus:
      'Establishing engineering baselines, reviewing core literature, and scoping concrete real-world problem statements.',
    deliverables: [
      'Development environment setup and baseline engineering review',
      'Scoping document defining the initial problem and target user group',
      'Individual skills self-assessment and team domain mapping'
    ]
  },
  {
    weeks: 'Weeks 4–5',
    title: 'Literature review and baseline reproduction',
    focus:
      'Reading relevant papers, identifying prior approaches, and reproducing a simple baseline system without AI or with minimal heuristics.',
    deliverables: [
      'Annotated literature bibliography detailing 5–10 key papers',
      'Working reproduction of a standard baseline system',
      'Baseline performance benchmark and failure case documentation'
    ]
  },
  {
    weeks: 'Week 6',
    title: 'Research proposal and experiment design',
    focus:
      'Presenting the formal hypothesis, architecture proposal, evaluation metrics, and experimental plan for peer and technical review.',
    deliverables: [
      'Written research proposal with falsifiable questions and milestones',
      'Technical design review presentation',
      'Evaluation dataset definition and metric calculation code'
    ]
  },
  {
    weeks: 'Weeks 7–11',
    title: 'Experiments and prototype development',
    focus:
      'Iterative experimental cycles: implementing prototypes, running ablation studies, logging results, and fixing failure modes.',
    deliverables: [
      'Working experimental code repository with automated tests',
      'Continuous experiment logs comparing novel approach against baseline',
      'Mid-programme technical progress checkpoint'
    ]
  },
  {
    weeks: 'Weeks 12–14',
    title: 'User testing, evaluation, and refinement',
    focus:
      'Subjecting prototypes to rigorous benchmark suites, edge cases, and pilot user testing where feasible.',
    deliverables: [
      'Synthesized pilot test feedback or stress-test results',
      'Ablation analysis explaining which components contributed to performance',
      'Refined software prototype with hardened error recovery'
    ]
  },
  {
    weeks: 'Weeks 15–16',
    title: 'Reproducibility review, technical report, and demo',
    focus:
      'Full reproducibility audit, drafting the final technical report, and presenting the working demo to the community.',
    deliverables: [
      'Clean, reproducible open-source repository with reproduction instructions',
      'Comprehensive technical report covering methodology, findings, and limitations',
      'Public demonstration of the working system'
    ]
  },
  {
    weeks: 'Optional weeks 17–20',
    title: 'Deeper experiments, extended pilots, and release preparation',
    focus:
      'For teams with promising results: deeper evaluations, multi-institution pilots, and packaging software for open distribution.',
    deliverables: [
      'Extended pilot reports with production telemetry or partner feedback',
      'Refined technical report formatted for open pre-print distribution',
      'Maintenance plan and long-term project roadmap'
    ],
    isExtension: true
  }
];

export const expectedOutputs: { title: string; detail: string }[] = [
  {
    title: 'A working, evaluated prototype',
    detail: 'A functional software system that can be deployed, tested, and demonstrated on real inputs.'
  },
  {
    title: 'A reproducible code repository',
    detail: 'Clean, well-documented code with single-command setup, locked dependencies, and clear tests.'
  },
  {
    title: 'Documented benchmark or dataset',
    detail: 'A curated evaluation dataset and transparent scoring harness appropriate for the problem.'
  },
  {
    title: 'Experiment logs & baseline comparisons',
    detail: 'Honest records of experiments run, parameters used, failures encountered, and comparisons against standard baselines.'
  },
  {
    title: 'Technical report with limitations',
    detail: 'An editorial-grade paper detailing motivation, methodology, quantitative results, and explicit limitations.'
  },
  {
    title: 'User or pilot validation feedback',
    detail: 'Direct observations, usability notes, and qualitative feedback gathered from real users where access is available.'
  },
  {
    title: 'Final demo & individual contribution record',
    detail: 'A public presentation of the software alongside clear attribution of each fellow’s architectural and code contributions.'
  }
];

export const selectionSteps: { step: string; title: string; description: string }[] = [
  {
    step: '01',
    title: 'Application and interests',
    description:
      'Submit your background, past engineering projects or curiosity, and the research direction that excites you most.'
  },
  {
    step: '02',
    title: 'Review of previous work or practical exercise',
    description:
      'A review of your existing code repositories, technical writing, or a lightweight take-home exercise testing fundamentals.'
  },
  {
    step: '03',
    title: 'Discussion of reasoning, motivation, and availability',
    description:
      'A conversational interview exploring how you break down problems, debug unexpected errors, collaborate, and your weekly commitment.'
  },
  {
    step: '04',
    title: 'Selection and project matching',
    description:
      'Final cohort invitations issued and fellows matched to 4–5 person project teams based on complementary skill sets and interests.'
  }
];

export const faqs: FaqItem[] = [
  {
    id: 'who-can-apply',
    category: 'Eligibility',
    question: 'Who can apply?',
    answer:
      'The fellowship is open to curious students, early-career engineers, and builders who have foundational programming experience and want to move beyond surface-level API usage into genuine research and engineering. Prior research experience or university enrollment is not strictly required.'
  },
  {
    id: 'prior-research-experience',
    category: 'Eligibility',
    question: 'Do I need prior AI research experience?',
    answer:
      'No. Prior publications or formal academic research experience are not required. Selection will heavily emphasise curiosity, strong programming fundamentals, evidence of effort (such as personal projects or open-source contributions), and your capacity to learn and think systematically.'
  },
  {
    id: 'time-commitment',
    category: 'Commitment',
    question: 'How much time should I commit?',
    answer:
      'The suggested time commitment is 10–12 hours per week throughout the programme. This includes collaborative team sessions, weekly reviews, self-paced curriculum learning, and hands-on coding. Final expectations will be confirmed when application dates are announced.'
  },
  {
    id: 'remote-or-in-person',
    category: 'Commitment',
    question: 'Is the programme remote or in person?',
    answer:
      'Delivery mode details (virtual, hybrid, or regional in-person meetups) are currently being finalized and will be clearly published before applications open.'
  },
  {
    id: 'fee-or-stipend',
    category: 'Commitment',
    question: 'Is there a fee or stipend?',
    answer:
      'Details regarding programme costs, stipends, or compute allowances will be formally published prior to opening applications. We are committed to transparency and will announce full financial and logistical details upfront.'
  },
  {
    id: 'mentors-available',
    category: 'Mentorship & Teams',
    question: 'Will mentors be available?',
    answer:
      'We plan to involve technical reviewers, domain advisors, and experienced practitioners to provide weekly feedback and project guidance. Confirmed mentor participation, project allocation, and advisory formats will be announced before the cohort launches.'
  },
  {
    id: 'what-will-i-build',
    category: 'Outcomes',
    question: 'What will I build?',
    answer:
      'Each team of 4–5 fellows will own a specific research question tied to a proposed direction. You will build a reproducible baseline, an experimental prototype addressing the question, an evaluation benchmark, and a written technical report detailing your findings.'
  },
  {
    id: 'will-work-be-published',
    category: 'Outcomes',
    question: 'Will my work be published?',
    answer:
      'Every team will produce a rigorous open technical report and a reproducible repository. Where results demonstrate novel and verifiable findings, teams may be encouraged to prepare submissions for pre-print servers or peer-reviewed venues. However, academic acceptance is never guaranteed.'
  },
  {
    id: 'who-owns-code-research',
    category: 'Outcomes',
    question: 'Who owns the project code and research?',
    answer:
      'Our guiding philosophy is that fellows own their work under permissive open-source licenses (such as MIT or Apache 2.0). Specific intellectual property terms and community guidelines will be published in full before applications open.'
  },
  {
    id: 'when-applications-open',
    category: 'Applications',
    question: 'When will applications open?',
    answer:
      'Applications are not open yet. We are actively finalizing cohort logistics, mentor commitments, and project resources. Detailed timelines and application procedures will be announced on this website.'
  }
];

export const corePrinciples: { number: string; title: string; description: string }[] = [
  {
    number: '01',
    title: 'Start with a real problem',
    description:
      'We begin with actual workflow frictions, usability hurdles, and operational bottlenecks—not hypothetical capabilities in search of a use case.'
  },
  {
    number: '02',
    title: 'Understand existing work',
    description:
      'Before writing novel code, we read previous literature, review existing open tools, and examine why earlier attempts failed or stalled.'
  },
  {
    number: '03',
    title: 'Compare against a baseline',
    description:
      'Novelty is meaningless without comparison. We implement simple, transparent heuristic baselines before claiming an AI model produces better outcomes.'
  },
  {
    number: '04',
    title: 'Test assumptions',
    description:
      'We do not trust prompt outputs on faith. We subject systems to deliberate edge cases, adversarial inputs, and unexpected perturbations.'
  },
  {
    number: '05',
    title: 'Document failures',
    description:
      'Negative results and failed experiments are genuine research contributions. We log what broke, why it broke, and what we learned.'
  },
  {
    number: '06',
    title: 'Build reproducibly',
    description:
      'If another engineer cannot clone the repository, run one script, and verify identical findings, the research is not done.'
  },
  {
    number: '07',
    title: 'Share credit clearly',
    description:
      'We practice open attribution. Every team member’s architectural, experimental, and implementation contributions are explicitly cited.'
  },
  {
    number: '08',
    title: 'Validate usefulness with users',
    description:
      'High benchmark numbers on synthetic data do not equal real utility. We test our software directly with practitioners working in the problem domain.'
  }
];
