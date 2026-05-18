# Superpowers Skills Library

Skills are located in `.kiro/skills/` — each skill is a `SKILL.md` with proven workflows and techniques.

**Before starting complex tasks**, check if a relevant skill exists and apply it.

---

## Available Skills

### 🏗 Architecture
| Skill | When to use |
|-------|-------------|
| `architecture/preserving-productive-tensions` | When disagreements surface — don't force resolution, preserve the tension as signal |

### 🤝 Collaboration
| Skill | When to use |
|-------|-------------|
| `collaboration/brainstorming` | Exploring ideas, designing solutions interactively with the user |
| `collaboration/dispatching-parallel-agents` | Multiple independent problems to investigate/fix concurrently |
| `collaboration/executing-plans` | Executing a detailed plan step-by-step with checkpoints |
| `collaboration/finishing-a-development-branch` | Wrapping up a feature branch — merge, PR, or cleanup |
| `collaboration/receiving-code-review` | Receiving review feedback — apply with technical rigor |
| `collaboration/remembering-conversations` | Need to recall past decisions, facts, patterns from prior sessions |
| `collaboration/requesting-code-review` | Before declaring implementation done — dispatch reviewer subagent |
| `collaboration/subagent-driven-development` | Big implementation plan — dispatch fresh subagent per task |
| `collaboration/using-git-worktrees` | Need isolated working directories for parallel development |
| `collaboration/writing-plans` | Planning a feature — create bite-sized tasks with full context |

### 🐛 Debugging
| Skill | When to use |
|-------|-------------|
| `debugging/defense-in-depth` | Preventing bugs — validate at every layer |
| `debugging/root-cause-tracing` | Bug found — trace backward through call stack to origin |
| `debugging/systematic-debugging` | Any bug — never jump to solutions, use 4-phase framework |
| `debugging/verification-before-completion` | Before saying "done" — run verifications, confirm output |

### 🧠 Problem Solving
| Skill | When to use |
|-------|-------------|
| `problem-solving/when-stuck` | **Start here when stuck** — routes to the right technique |
| `problem-solving/collision-zone-thinking` | Need creative solutions — force unrelated concepts together |
| `problem-solving/inversion-exercise` | Assumptions feel wrong — flip them to find alternatives |
| `problem-solving/meta-pattern-recognition` | Same problem appearing in 3+ places — find universal principle |
| `problem-solving/scale-game` | Solution feels fragile — test at extremes (1000x bigger/smaller) |
| `problem-solving/simplification-cascades` | Architecture too complex — find one insight that removes X, Y, Z |

### 🔬 Research
| Skill | When to use |
|-------|-------------|
| `research/tracing-knowledge-lineages` | Understanding how ideas evolved, avoiding reinventing past failures |

### 🧪 Testing
| Skill | When to use |
|-------|-------------|
| `testing/test-driven-development` | Writing new code — write test first, watch fail, then implement |
| `testing/condition-based-waiting` | Async tests with timeouts — replace with condition polling |
| `testing/testing-anti-patterns` | Designing tests — never mock what you don't own, no test-only methods |

### ⚙️ Meta (skills about skills)
| Skill | When to use |
|-------|-------------|
| `meta/writing-skills` | Creating a new skill — TDD for process docs |
| `meta/testing-skills-with-subagents` | Validating a skill works — baseline → fix → iterate |
| `meta/sharing-skills` | Contributing a skill back to upstream |
| `meta/pulling-updates-from-skills-repository` | Syncing with obra/superpowers-skills upstream |
| `meta/gardening-skills-wiki` | Skills feel stale/broken — check links, naming, coverage |

---

## How to use a skill

Read the relevant `SKILL.md` file before starting the task. Skills contain mandatory steps, common mistakes, and proven patterns.

Example: to debug systematically, read `.kiro/skills/debugging/systematic-debugging/SKILL.md` first.
