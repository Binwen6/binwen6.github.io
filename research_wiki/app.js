const refs = {
  transformerCircuits: {
    title: "Elhage et al., A Mathematical Framework for Transformer Circuits, 2021",
    url: "https://transformer-circuits.pub/2021/framework/index.html",
  },
  circuitsThread: {
    title: "Olah et al., Circuits thread, Distill, 2020",
    url: "https://distill.pub/2020/circuits/",
  },
  ioi: {
    title: "Wang et al., Interpretability in the Wild: IOI Circuit, 2022",
    url: "https://arxiv.org/abs/2211.00593",
  },
  transformerLens: {
    title: "TransformerLens documentation",
    url: "https://transformerlensorg.github.io/TransformerLens/",
  },
  activationPatching: {
    title: "Heimersheim & Nanda, How to use and interpret activation patching, 2024",
    url: "https://arxiv.org/abs/2404.15255",
  },
  rome: {
    title: "Meng et al., Locating and Editing Factual Associations in GPT, NeurIPS 2022",
    url: "https://rome.baulab.info/",
  },
  memit: {
    title: "Meng et al., Mass-Editing Memory in a Transformer, 2023",
    url: "https://memit.baulab.info/",
  },
  monosemanticity: {
    title: "Bricken et al., Towards Monosemanticity, 2023",
    url: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
  },
  toySuperposition: {
    title: "Elhage et al., Toy Models of Superposition, 2022",
    url: "https://transformer-circuits.pub/2022/toy_model/index.html",
  },
  causalScrubbing: {
    title: "Chan et al., Causal Scrubbing, 2022",
    url: "https://www.alignmentforum.org/posts/JvZhhzycHu2Yd57RN/causal-scrubbing-a-method-for-rigorously-testing",
  },
  acdc: {
    title: "Conmy et al., Towards Automated Circuit Discovery, 2023",
    url: "https://arxiv.org/abs/2304.14997",
  },
  logitLens: {
    title: "nostalgebraist, Interpreting GPT: the logit lens, 2020",
    url: "https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru/interpreting-gpt-the-logit-lens",
  },
  tunedLens: {
    title: "Belrose et al., Eliciting Latent Predictions from Transformers with the Tuned Lens, 2023",
    url: "https://arxiv.org/abs/2303.08112",
  },
  structuralProbe: {
    title: "Hewitt & Manning, A Structural Probe for Finding Syntax in Word Representations, 2019",
    url: "https://aclanthology.org/N19-1419/",
  },
  bertology: {
    title: "Tenney et al., BERT Rediscovers the Classical NLP Pipeline, 2019",
    url: "https://aclanthology.org/P19-1452/",
  },
  probingPitfalls: {
    title: "Belinkov, Probing Classifiers: Promises, Shortcomings, and Advances, 2022",
    url: "https://direct.mit.edu/coli/article/48/1/207/106317/Probing-Classifiers-Promises-Shortcomings-and",
  },
  tcav: {
    title: "Kim et al., Interpretability Beyond Feature Attribution: TCAV, ICML 2018",
    url: "https://arxiv.org/abs/1711.11279",
  },
  svcca: {
    title: "Raghu et al., SVCCA: Singular Vector Canonical Correlation Analysis, 2017",
    url: "https://arxiv.org/abs/1706.05806",
  },
  cca: {
    title: "Morcos et al., Insights on representational similarity in neural networks with CKA, 2019",
    url: "https://arxiv.org/abs/1905.00414",
  },
  ig: {
    title: "Sundararajan et al., Axiomatic Attribution for Deep Networks, ICML 2017",
    url: "https://arxiv.org/abs/1703.01365",
  },
  deeplift: {
    title: "Shrikumar et al., Learning Important Features Through Propagating Activation Differences, 2017",
    url: "https://arxiv.org/abs/1704.02685",
  },
  repE: {
    title: "Zou et al., Representation Engineering, 2023",
    url: "https://arxiv.org/abs/2310.01405",
  },
  actAdd: {
    title: "Turner et al., Activation Addition, 2023",
    url: "https://arxiv.org/abs/2308.10248",
  },
  lora: {
    title: "Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, 2021",
    url: "https://arxiv.org/abs/2106.09685",
  },
  pruning: {
    title: "Michel et al., Are Sixteen Heads Really Better than One?, NeurIPS 2019",
    url: "https://arxiv.org/abs/1905.10650",
  },
  moe: {
    title: "Shazeer et al., Outrageously Large Neural Networks: Sparsely-Gated MoE, 2017",
    url: "https://arxiv.org/abs/1701.06538",
  },
  dcm: {
    title: "Ghorbani et al., Towards Automatic Concept-based Explanations, NeurIPS 2019",
    url: "https://arxiv.org/abs/1902.03129",
  },
};

const texts = {
  zh: {
    brand: "LLM Research Wiki",
    subtitle: "Mechanistic interpretability field guide",
    search: "搜索目录与文章",
    placeholder: "activation patching / SAE / probing...",
    language: "语言",
    toc: "目录",
    all: "全部文章",
    references: "参考文献",
    introTitle: "面向研究者的 mech interp 问题导航",
    introBody:
      "每个二级主题是一篇文章；每个三级小点是文章内可定位的小节，并包含数学原理、使用场景、优缺点、核心代码示例与引用。",
    latest: "阅读入口",
    math: "数学原理",
    use: "使用场景 / 示例",
    pros: "优点",
    cons: "局限",
    visual: "可能的可视化方式",
    code: "核心代码示例",
    cite: "引用",
    source: "图源",
    related: "相关小节",
    noResults: "没有找到匹配内容。",
    openArticle: "阅读文章",
    referenceIntro: "站内引用优先选择论文、项目页、官方工具文档和经典技术报告。",
  },
  en: {
    brand: "LLM Research Wiki",
    subtitle: "Mechanistic interpretability field guide",
    search: "Search table of contents",
    placeholder: "activation patching / SAE / probing...",
    language: "Language",
    toc: "Contents",
    all: "All articles",
    references: "References",
    introTitle: "A problem-first guide for mech interp researchers",
    introBody:
      "Each second-level topic is a blog-style article; each third-level item is an anchorable section with math, use cases, pros, cons, code, and citations.",
    latest: "Reading entry points",
    math: "Mathematical principle",
    use: "When to use / example",
    pros: "Pros",
    cons: "Limits",
    visual: "Possible visualization",
    code: "Core code example",
    cite: "References",
    source: "Source",
    related: "Related sections",
    noResults: "No matching content.",
    openArticle: "Read article",
    referenceIntro: "References favor papers, project pages, official tool docs, and classic technical reports.",
  },
};

const techniques = {
  activation: {
    refs: ["transformerLens", "activationPatching", "rome"],
    zh: {
      math: "比较 clean 与 corrupted 条件下激活 A 的替换效应：score = m(M_corrupt[A := A_clean]) - m(M_corrupt)。若目标 logit-diff 或任务指标显著恢复，该位置对机制有因果贡献。",
      use: "适合 IOI、事实回忆、偏见触发、格式遵循等能构造最小反事实输入的问题。先扫描 layer × position，再细化到 head、MLP、neuron 或 SAE feature。",
      pros: "因果性强；可做热力图定位；与 TransformerLens hook/cache 工作流兼容。",
      cons: "需要好 metric 与 clean/corrupted pair；细粒度 patch 成本高；只证明当前反事实分布下的贡献。",
      code: `clean_logits, clean_cache = model.run_with_cache(clean_tokens)
def metric(logits):
    return logits[0, -1, target] - logits[0, -1, distractor]
scores = get_act_patch_resid_pre(model, corrupt_tokens, clean_cache, metric)`,
    },
    en: {
      math: "Estimate the replacement effect of activation A between clean and corrupted runs: score = m(M_corrupt[A := A_clean]) - m(M_corrupt). Recovery of logit-diff or task score indicates causal contribution.",
      use: "Best for IOI, factual recall, bias triggers, format following, and other settings with minimal counterfactual pairs. Scan layer × position first, then refine to heads, MLPs, neurons, or SAE features.",
      pros: "Strong causal evidence; produces localization heatmaps; fits the TransformerLens hook/cache workflow.",
      cons: "Depends on the metric and counterfactual pair; fine-grained scans are expensive; evidence is local to the tested distribution.",
      code: `clean_logits, clean_cache = model.run_with_cache(clean_tokens)
def metric(logits):
    return logits[0, -1, target] - logits[0, -1, distractor]
scores = get_act_patch_resid_pre(model, corrupt_tokens, clean_cache, metric)`,
    },
  },
  probing: {
    refs: ["structuralProbe", "bertology", "probingPitfalls"],
    zh: {
      math: "训练简单解码器 p(y|h)=softmax(Wh+b)，或回归器 y≈Wh+b。层间 probe 曲线显示信息何时可线性读出，但不等同于模型实际使用该信息。",
      use: "适合验证语法、实体属性、数值、truthfulness、token role 等变量是否在某层、某位置或某 module 输出中可解码。",
      pros: "低成本、易批量扫描；能产生层级曲线；适合和 patching 组合成“可读出 + 因果使用”的证据链。",
      cons: "probe 可能学到 dataset shortcut；高准确率不代表机制存在因果效应；需要控制 probe capacity 和基线。",
      code: `acts, labels = collect_acts(model, prompts, hook_name)
probe = torch.nn.Linear(acts.shape[-1], n_labels)
loss = F.cross_entropy(probe(acts_train), labels_train)
acc = evaluate(probe, acts_test, labels_test)`,
    },
    en: {
      math: "Train a simple decoder p(y|h)=softmax(Wh+b), or a regressor y≈Wh+b. Layer-wise probe curves show when information is linearly readable, but not whether the model uses it.",
      use: "Use for syntax, entity attributes, numeracy, truthfulness, token roles, or other labels at layers, positions, or module outputs.",
      pros: "Cheap to scan; gives layer-wise curves; combines well with patching as a readability-plus-causality pipeline.",
      cons: "Probes can exploit dataset shortcuts; high accuracy is not causal evidence; probe capacity and baselines matter.",
      code: `acts, labels = collect_acts(model, prompts, hook_name)
probe = torch.nn.Linear(acts.shape[-1], n_labels)
loss = F.cross_entropy(probe(acts_train), labels_train)
acc = evaluate(probe, acts_test, labels_test)`,
    },
  },
  subspace: {
    refs: ["tcav", "svcca", "cca", "monosemanticity"],
    zh: {
      math: "把激活矩阵 H 分解或投影到子空间 U：z = H U，比较投影分数、子空间角度、CCA/CKA 相似度或 concept activation vector 的方向导数。",
      use: "适合研究概念方向、机制几何、跨层对齐、cluster/manifold，以及多个机制是否共享或竞争同一表示空间。",
      pros: "能刻画结构而不只定位单点；可比较模型、层与任务；适合发现 superposition 与表示漂移。",
      cons: "无监督分量未必语义稳定；旋转不唯一；高相似度不保证因果使用。",
      code: `H = collect_residual_stream(model, prompts, layer)
U, S, Vh = torch.linalg.svd(H - H.mean(0), full_matrices=False)
scores = (H @ Vh[:k].T)
overlap = torch.linalg.svdvals(U_a.T @ U_b).mean()`,
    },
    en: {
      math: "Decompose or project activations H into a subspace U: z = H U. Compare projection scores, principal angles, CCA/CKA similarity, or directional derivatives along concept vectors.",
      use: "Useful for concept directions, mechanism geometry, cross-layer alignment, clusters/manifolds, and whether mechanisms share or compete for representational space.",
      pros: "Describes structure rather than a single location; compares models, layers, and tasks; helps diagnose superposition and representational drift.",
      cons: "Unsupervised components may be unstable; rotations are non-unique; similarity is not causal use.",
      code: `H = collect_residual_stream(model, prompts, layer)
U, S, Vh = torch.linalg.svd(H - H.mean(0), full_matrices=False)
scores = (H @ Vh[:k].T)
overlap = torch.linalg.svdvals(U_a.T @ U_b).mean()`,
    },
  },
  sae: {
    refs: ["monosemanticity", "toySuperposition"],
    zh: {
      math: "训练稀疏自编码器：z = ReLU(W_enc x + b)，x_hat = W_dec z + b，L = ||x-x_hat||² + λ||z||₁。稀疏性把 dense activation 分解为较单义 feature。",
      use: "适合 neuron polysemantic、superposition 明显、需要 feature browser、feature patching 或 feature steering 的研究。",
      pros: "能把混叠表示拆成可命名 feature；支持按 top activating examples 做解释；可跨 prompt 统计。",
      cons: "训练与选择超参成本高；feature 命名需要验证；dead features、重构误差会影响结论。",
      code: `z = F.relu(encoder(x))
x_hat = decoder(z)
loss = ((x - x_hat) ** 2).mean() + l1_coef * z.abs().mean()
loss.backward()`,
    },
    en: {
      math: "Train a sparse autoencoder: z = ReLU(W_enc x + b), x_hat = W_dec z + b, L = ||x-x_hat||² + λ||z||₁. Sparsity decomposes dense activations into more monosemantic features.",
      use: "Best when neurons are polysemantic, superposition is suspected, or you need feature browsers, feature patching, or feature steering.",
      pros: "Separates entangled representations into nameable features; supports top-activating examples; works across prompt corpora.",
      cons: "Training and hyperparameters are costly; feature labels need validation; dead features and reconstruction error matter.",
      code: `z = F.relu(encoder(x))
x_hat = decoder(z)
loss = ((x - x_hat) ** 2).mean() + l1_coef * z.abs().mean()
loss.backward()`,
    },
  },
  attention: {
    refs: ["transformerCircuits", "ioi", "transformerLens"],
    zh: {
      math: "Attention pattern = softmax(QK^T/√d + mask)。QK circuit 决定“看哪里”，OV circuit 决定“写什么”：OV≈W_E W_V W_O W_U。",
      use: "适合 induction head、previous-token head、copying、name mover、token 路由与跨位置信息传递问题。",
      pros: "直观可视化强；能连接权重矩阵、token 路由和 logits 写入；适合从 pattern 到 causal patching 的流程。",
      cons: "attention weight 不等于解释；多层与 MLP 会混入上下文依赖；只看 pattern 会漏掉 value 内容。",
      code: `_, cache = model.run_with_cache(tokens)
pattern = cache["pattern", layer][0, head]
imshow(pattern, x=tokens_str, y=tokens_str)
ov = model.W_E @ model.W_V[layer, head] @ model.W_O[layer, head] @ model.W_U`,
    },
    en: {
      math: "Attention pattern = softmax(QK^T/√d + mask). QK circuits decide where to look; OV circuits decide what gets written: OV≈W_E W_V W_O W_U.",
      use: "Use for induction heads, previous-token heads, copying, name movers, routing, and cross-position information transfer.",
      pros: "Highly inspectable; links weights, token routing, and logit writing; pairs naturally with causal patching.",
      cons: "Attention weights are not explanations by themselves; multilayer context and MLPs complicate interpretation; patterns omit value content.",
      code: `_, cache = model.run_with_cache(tokens)
pattern = cache["pattern", layer][0, head]
imshow(pattern, x=tokens_str, y=tokens_str)
ov = model.W_E @ model.W_V[layer, head] @ model.W_O[layer, head] @ model.W_U`,
    },
  },
  logit: {
    refs: ["logitLens", "tunedLens", "transformerLens"],
    zh: {
      math: "把中间 residual h_l 通过 unembedding 或 tuned translator 映射到词表：logits_l = W_U LN(h_l)。层级 logit 变化显示预测何时显影。",
      use: "适合找答案 token、事实回忆、copying、决策方向在第几层首次出现，或作为 patching 前的快速定位。",
      pros: "快速、可解释、无需训练或只需轻量 translator；很适合画 layer × token 热力图。",
      cons: "原始 logit lens 受 LayerNorm 与表示基影响；早层 logits 不一定是模型真实中间预测；需要因果验证。",
      code: `logits, cache = model.run_with_cache(tokens)
for layer in range(model.cfg.n_layers):
    resid = cache["resid_post", layer]
    layer_logits = model.unembed(model.ln_final(resid))
    scores[layer] = layer_logits[0, pos, target_token]`,
    },
    en: {
      math: "Map intermediate residual h_l to vocabulary logits with the unembedding or a tuned translator: logits_l = W_U LN(h_l). Layer-wise logits reveal when a prediction becomes visible.",
      use: "Use to locate when answer tokens, factual recall, copying, or decision directions first appear before causal tests.",
      pros: "Fast and interpretable; no training or only a light translator; great for layer × token heatmaps.",
      cons: "Raw logit lens is affected by LayerNorm and basis mismatch; early logits may not be real intermediate beliefs; causal validation is still needed.",
      code: `logits, cache = model.run_with_cache(tokens)
for layer in range(model.cfg.n_layers):
    resid = cache["resid_post", layer]
    layer_logits = model.unembed(model.ln_final(resid))
    scores[layer] = layer_logits[0, pos, target_token]`,
    },
  },
  attribution: {
    refs: ["ig", "deeplift", "activationPatching"],
    zh: {
      math: "梯度归因用 ∂m/∂a 衡量局部敏感性；Integrated Gradients 沿 baseline 到输入的路径积分：IG_i=(x_i-x'_i)∫∂F(x'+α(x-x'))/∂x_i dα。",
      use: "适合快速精细定位 token、embedding、head、neuron 或 feature，再用 patching/ablation 做确认。",
      pros: "一次 backward 可得到大量候选；适合大模型粗筛；能与 attribution patching 结合。",
      cons: "梯度是局部近似；baseline 选择敏感；饱和与非线性会导致误导。",
      code: `score = metric(model(tokens))
score.backward()
saliency = cache[hook_name].grad * cache[hook_name]
top_units = saliency.abs().flatten().topk(20)`,
    },
    en: {
      math: "Gradient attribution uses ∂m/∂a as local sensitivity. Integrated Gradients integrates along a baseline-to-input path: IG_i=(x_i-x'_i)∫∂F(x'+α(x-x'))/∂x_i dα.",
      use: "Good for quickly localizing tokens, embeddings, heads, neurons, or features before patching/ablation confirmation.",
      pros: "One backward pass ranks many candidates; useful for large-model screening; connects to attribution patching.",
      cons: "Gradients are local approximations; baselines matter; saturation and nonlinearity can mislead.",
      code: `score = metric(model(tokens))
score.backward()
saliency = cache[hook_name].grad * cache[hook_name]
top_units = saliency.abs().flatten().topk(20)`,
    },
  },
  intervention: {
    refs: ["activationPatching", "causalScrubbing", "acdc"],
    zh: {
      math: "把机制变量看作可干预节点：do(A=a*)，比较 E[m | do(A=a*)] 与 E[m]。负对照和多样本置信区间用于排除偶然恢复。",
      use: "适合验证机制是否对目标行为有必要性或充分性：置零、均值替换、随机替换、子空间投影去除、联合干预。",
      pros: "比相关性证据强；能量化 effect size；可做 placebo 和 ablation ladder。",
      cons: "干预可能分布外；置零不一定语义中性；联合干预组合爆炸。",
      code: `def ablate(act, hook):
    return torch.zeros_like(act)
patched_logits = model.run_with_hooks(tokens, fwd_hooks=[(hook_name, ablate)])
effect = metric(clean_logits) - metric(patched_logits)`,
    },
    en: {
      math: "Treat the mechanism variable as an intervenable node: do(A=a*), then compare E[m | do(A=a*)] with E[m]. Negative controls and confidence intervals reduce false positives.",
      use: "Use to test necessity or sufficiency through zero, mean, random replacement, subspace removal, or joint interventions.",
      pros: "Stronger than correlation; yields effect sizes; supports placebo controls and ablation ladders.",
      cons: "Interventions can be off-distribution; zeroing is not always neutral; joint interventions have combinatorial cost.",
      code: `def ablate(act, hook):
    return torch.zeros_like(act)
patched_logits = model.run_with_hooks(tokens, fwd_hooks=[(hook_name, ablate)])
effect = metric(clean_logits) - metric(patched_logits)`,
    },
  },
  editing: {
    refs: ["rome", "memit", "lora"],
    zh: {
      math: "权重编辑把目标关系写入局部参数：W' = W + uv^T；LoRA/adapter 则学习低秩增量 ΔW = BA，以较小参数量重定向机制。",
      use: "适合事实知识、模块级功能改写、定向 fine-tune、检查某机制是否可通过局部权重更新改变。",
      pros: "可把解释转化为可操作干预；参数局部、可评估 specificity；适合做副作用测试。",
      cons: "可能引入知识冲突；局部编辑不保证全局一致；需要评估泛化、保持性和 off-target effects。",
      code: `delta = solve_rank_one_update(model, layer, subject, target_new)
with torch.no_grad():
    model.blocks[layer].mlp.W_out += delta
evaluate_edit(model, request, neighborhood_prompts)`,
    },
    en: {
      math: "Model editing writes a target relation into local parameters: W' = W + uv^T. LoRA/adapters learn low-rank updates ΔW = BA to redirect mechanisms with few trainable parameters.",
      use: "Use for factual knowledge, module-level rewrites, targeted fine-tuning, or testing whether a local weight change can modify a mechanism.",
      pros: "Turns explanations into operational interventions; local parameters enable specificity tests; good for side-effect evaluation.",
      cons: "May create knowledge conflicts; local edits need not be globally coherent; generalization, preservation, and off-target effects must be measured.",
      code: `delta = solve_rank_one_update(model, layer, subject, target_new)
with torch.no_grad():
    model.blocks[layer].mlp.W_out += delta
evaluate_edit(model, request, neighborhood_prompts)`,
    },
  },
  steering: {
    refs: ["repE", "actAdd", "monosemanticity"],
    zh: {
      math: "在 hidden state 或 SAE feature 上注入方向：h'_l = h_l + αv，或 z'_i = z_i + α。扫 α 可得到机制强度与行为变化曲线。",
      use: "适合控制情绪、拒答、有害性、推理风格、事实偏好，或测试某 feature/circuit 是否可被连续调节。",
      pros: "无需重训即可在线控制；强度可连续调节；与 SAE feature 结合时较可解释。",
      cons: "可能影响无关行为；方向在模型/层间迁移有限；需要鲁棒性和安全评估。",
      code: `def steer(act, hook):
    act[:, pos, :] += alpha * direction
    return act
logits = model.run_with_hooks(tokens, fwd_hooks=[(f"blocks.{layer}.hook_resid_post", steer)])`,
    },
    en: {
      math: "Inject a direction into hidden states or SAE features: h'_l = h_l + αv, or z'_i = z_i + α. Sweeping α gives a dose-response curve.",
      use: "Use for sentiment, refusal, harmfulness, reasoning style, factual preference, or testing continuous control of a feature/circuit.",
      pros: "Online control without retraining; strength is continuous; SAE features can make it interpretable.",
      cons: "Can affect unrelated behavior; directions may not transfer across models/layers; robustness and safety checks are required.",
      code: `def steer(act, hook):
    act[:, pos, :] += alpha * direction
    return act
logits = model.run_with_hooks(tokens, fwd_hooks=[(f"blocks.{layer}.hook_resid_post", steer)])`,
    },
  },
  evaluation: {
    refs: ["causalScrubbing", "activationPatching", "ioi"],
    zh: {
      math: "把评价写成 effect size、selectivity 或 stability：ratio = Δtarget / (ε + Δoff-target)。用 bootstrap 置信区间比较机制在任务、token、层、模型间是否稳定。",
      use: "适合验证普遍性、专一性、鲁棒性和副作用，尤其是跨任务、跨模型、跨 checkpoint 的机制研究。",
      pros: "把定性解释变成可重复指标；能暴露 off-target effects；适合 dashboard/pipeline。",
      cons: "指标设计会决定结论；OOD 和 adversarial set 很难覆盖；统计显著不等于机制完整。",
      code: `effects = []
for batch in bootstrap(dataset, n=1000):
    effects.append(metric(run_intervention(model, batch)))
ci = torch.quantile(torch.tensor(effects), torch.tensor([0.025, 0.975]))`,
    },
    en: {
      math: "Define effect size, selectivity, or stability metrics: ratio = Δtarget / (ε + Δoff-target). Bootstrap confidence intervals test stability across tasks, tokens, layers, or models.",
      use: "Use for universality, specificity, robustness, and side-effect evaluation across tasks, models, checkpoints, or distributions.",
      pros: "Turns qualitative claims into repeatable metrics; exposes off-target effects; fits dashboards and pipelines.",
      cons: "Metric choice shapes conclusions; OOD/adversarial coverage is hard; statistical significance is not a complete mechanism.",
      code: `effects = []
for batch in bootstrap(dataset, n=1000):
    effects.append(metric(run_intervention(model, batch)))
ci = torch.quantile(torch.tensor(effects), torch.tensor([0.025, 0.975]))`,
    },
  },
  optimization: {
    refs: ["lora", "pruning", "moe", "repE"],
    zh: {
      math: "把机制指标加入训练或结构搜索目标：L_total = L_task + λL_mech；或以重要度 I(module) 决定 pruning、gating、curriculum 与辅助 loss。",
      use: "适合把已知 circuit/feature 用于训练正则、模块化、剪枝、能力放大、安全抑制和自动化评估。",
      pros: "能把解释转化为性能或安全收益；适合系统化 pipeline；可连接 dashboard 与自动干预。",
      cons: "容易过拟合解释指标；优化机制可能牺牲通用能力；需要强 held-out 与副作用评估。",
      code: `task_loss = F.cross_entropy(logits, labels)
mech_loss = target_feature_activation.mean()
loss = task_loss + lambda_mech * mech_loss
loss.backward()`,
    },
    en: {
      math: "Add mechanism metrics to training or architecture objectives: L_total = L_task + λL_mech, or use module importance I(module) for pruning, gating, curricula, and auxiliary losses.",
      use: "Use known circuits/features for regularization, modularization, pruning, capability amplification, safety suppression, and automated evaluation.",
      pros: "Turns interpretation into performance or safety gains; supports systematic pipelines; connects to dashboards and automatic interventions.",
      cons: "Can overfit interpretability metrics; optimizing a mechanism may hurt general ability; strong held-out and side-effect tests are essential.",
      code: `task_loss = F.cross_entropy(logits, labels)
mech_loss = target_feature_activation.mean()
loss = task_loss + lambda_mech * mech_loss
loss.backward()`,
    },
  },
};

const visualizations = {
  activation: {
    ref: "activationPatching",
    image: "https://arxiv.org/html/2404.15255/x1.png",
    fallback: "https://arxiv.org/abs/2404.15255",
    zh: "用 layer × token 或 head × token 的 patching heatmap 展示 clean activation 替换后 metric 的恢复程度；适合在论文中作为定位机制的主图。",
    en: "Use a layer × token or head × token patching heatmap to show metric recovery after replacing corrupted activations with clean activations.",
  },
  probing: {
    ref: "structuralProbe",
    fallback: "https://aclanthology.org/N19-1419.pdf",
    zh: "用 layer-wise probe accuracy 曲线、token-level heatmap 或 structural probe 距离树截图展示信息在哪些层/位置可线性读出。",
    en: "Use layer-wise probe-accuracy curves, token-level heatmaps, or structural-probe distance-tree figures to show where information is linearly readable.",
  },
  subspace: {
    ref: "tcav",
    image: "https://arxiv.org/html/1711.11279/x1.png",
    fallback: "https://arxiv.org/abs/1711.11279",
    zh: "用 PCA/CCA/CKA 相似度热力图、concept vector 投影分数或 TCAV 方向导数图展示概念子空间。",
    en: "Use PCA/CCA/CKA similarity heatmaps, concept-vector projection scores, or TCAV directional-derivative figures to visualize concept subspaces.",
  },
  sae: {
    ref: "monosemanticity",
    image: "https://transformer-circuits.pub/2023/monosemantic-features/images/feature-splitting.png",
    fallback: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
    zh: "用 SAE feature browser、top activating examples、feature activation histogram 或 feature splitting 图展示单义特征。",
    en: "Use SAE feature-browser panels, top-activating examples, activation histograms, or feature-splitting figures to show monosemantic features.",
  },
  attention: {
    ref: "transformerCircuits",
    image: "https://transformer-circuits.pub/2021/framework/images/induction-head.png",
    fallback: "https://transformer-circuits.pub/2021/framework/index.html",
    zh: "用 attention pattern heatmap、QK/OV token-to-token 矩阵或 induction-head 图展示信息路由与写入方向。",
    en: "Use attention-pattern heatmaps, QK/OV token-to-token matrices, or induction-head diagrams to show routing and writing directions.",
  },
  logit: {
    ref: "tunedLens",
    image: "https://arxiv.org/html/2303.08112/x1.png",
    fallback: "https://arxiv.org/abs/2303.08112",
    zh: "用 layer × token 的 logit-lens/tuned-lens 热力图展示答案 token 或目标方向何时在 residual stream 中显影。",
    en: "Use layer × token logit-lens or tuned-lens heatmaps to show when answer tokens or target directions become visible in the residual stream.",
  },
  attribution: {
    ref: "ig",
    image: "https://arxiv.org/html/1703.01365/x1.png",
    fallback: "https://arxiv.org/abs/1703.01365",
    zh: "用 token saliency、integrated-gradient attribution map 或 module gradient heatmap 展示输出对输入/激活的敏感性。",
    en: "Use token saliency, integrated-gradient attribution maps, or module-gradient heatmaps to show output sensitivity to inputs or activations.",
  },
  intervention: {
    ref: "activationPatching",
    image: "https://arxiv.org/html/2404.15255/x1.png",
    fallback: "https://arxiv.org/abs/2404.15255",
    zh: "用 ablation ladder、patch matrix、负对照条形图或 bootstrap confidence interval 展示干预效应量。",
    en: "Use ablation ladders, patch matrices, negative-control bars, or bootstrap confidence intervals to show intervention effect sizes.",
  },
  editing: {
    ref: "rome",
    image: "https://rome.baulab.info/images/small-ct-animation.gif",
    fallback: "https://rome.baulab.info/",
    zh: "用 causal tracing 热力图、rank-one update 示意图或编辑前后 factual prompt 预测变化图展示知识定位与编辑。",
    en: "Use causal-tracing heatmaps, rank-one-update diagrams, or before/after factual-prompt plots to show knowledge localization and editing.",
  },
  steering: {
    ref: "repE",
    image: "https://arxiv.org/html/2310.01405/x1.png",
    fallback: "https://arxiv.org/abs/2310.01405",
    zh: "用 steering strength α 的 dose-response 曲线、行为得分曲线或 SAE feature activation 面板展示可控性。",
    en: "Use dose-response curves over steering strength α, behavior-score curves, or SAE feature-activation panels to show controllability.",
  },
  evaluation: {
    ref: "ioi",
    fallback: "https://arxiv.org/abs/2211.00593",
    zh: "用跨任务/跨模型稳定性矩阵、selectivity ratio 曲线、置信区间森林图或 circuit component 表展示普遍性与专一性。",
    en: "Use cross-task/model stability matrices, selectivity-ratio curves, confidence-interval forest plots, or circuit-component tables.",
  },
  optimization: {
    ref: "pruning",
    image: "https://arxiv.org/html/1905.10650/x1.png",
    fallback: "https://arxiv.org/abs/1905.10650",
    zh: "用 module importance 排名、剪枝后性能曲线、机制正则 loss 曲线或 dashboard 截图展示性能收益与副作用。",
    en: "Use module-importance rankings, post-pruning performance curves, mechanism-regularization curves, or dashboard screenshots.",
  },
};

const outline = [
  {
    n: "1",
    zh: "如何验证某种机制的存在性",
    en: "How to verify that a mechanism exists",
    articles: [
      ["1.1", "基于激活模式的存在性检验（按位置划分）", "Existence tests from activation patterns", [
        ["1.1.1", "Layer 级平均激活与分布检验", "Layer-level mean activation and distribution tests", "activation"],
        ["1.1.2", "Attention Head 级模式检测（注意力模式/注意力可视化）", "Attention-head pattern detection and visualization", "attention"],
        ["1.1.3", "Neuron / Feature 级激活谱分析", "Neuron/feature activation spectrum analysis", "sae"],
        ["1.1.4", "Token 级激活轨迹（随序列位置与 token 类型变化）", "Token-level activation trajectories", "activation"],
      ]],
      ["1.2", "基于 probing 的判别式存在性检验", "Discriminative existence tests with probing", [
        ["1.2.1", "Layer 级线性 probing（线性分类器/回归器）", "Layer-level linear probing", "probing"],
        ["1.2.2", "Token 表征上的 probing（输入 / 中间 / 输出 token）", "Probing token representations", "probing"],
        ["1.2.3", "Module 输出上的 probing（FFN 输出、Attention 输出）", "Probing module outputs", "probing"],
        ["1.2.4", "多层联合 probing（跨层拼接、分层 probe）", "Multi-layer and hierarchical probes", "probing"],
      ]],
      ["1.3", "基于表示子空间的存在性检验", "Existence tests from representational subspaces", [
        ["1.3.1", "PCA / ICA / NMF 等无监督分解的子空间检测", "PCA/ICA/NMF subspace detection", "subspace"],
        ["1.3.2", "已知方向投影（e.g. 情感、语法等方向的投影分数）", "Projection on known concept directions", "subspace"],
        ["1.3.3", "SAE（Sparse Autoencoder）特征存在性分析", "SAE feature existence analysis", "sae"],
        ["1.3.4", "DCM / concept subspace 等可解释子空间的对比", "DCM/concept-subspace comparisons", "subspace"],
      ]],
      ["1.4", "基于行为对比的存在性检验", "Existence tests from behavioral contrasts", [
        ["1.4.1", "触发 / 不触发条件下的输出差异（输入对照实验）", "Triggered vs non-triggered output differences", "evaluation"],
        ["1.4.2", "随机化 / 置换基线（随机头、随机层对比）", "Randomization and permutation baselines", "evaluation"],
        ["1.4.3", "小模型 vs 大模型的机制迁移（architecture scaling 对比）", "Small-vs-large model mechanism transfer", "evaluation"],
      ]],
    ],
  },
  {
    n: "2",
    zh: "如何验证某种机制的普遍性",
    en: "How to verify a mechanism's universality",
    articles: [
      ["2.1", "跨 token / 跨任务的普遍性", "Universality across tokens and tasks", [
        ["2.1.1", "不同 token 类型、频率、类别上的稳定性测试", "Stability across token types, frequencies, and classes", "evaluation"],
        ["2.1.2", "不同任务/数据分布上的机制再现（问答 / 翻译 / 推理）", "Reproduction across tasks and data distributions", "evaluation"],
        ["2.1.3", "分布外（OOD）样本与对抗样本上的机制稳定性", "Stability on OOD and adversarial samples", "evaluation"],
      ]],
      ["2.2", "跨 layer / 跨 module 的普遍性", "Universality across layers and modules", [
        ["2.2.1", "不同层同类模式的分布（机制在层间的“带宽”）", "Distribution of similar patterns across layers", "evaluation"],
        ["2.2.2", "不同模块（Attention / MLP / Embedding）的机制复现", "Reproduction in Attention/MLP/Embedding modules", "evaluation"],
        ["2.2.3", "跨层累积效应：早层 vs 中层 vs 末层 的对比研究", "Cumulative effects across early/middle/late layers", "logit"],
      ]],
      ["2.3", "跨模型架构的普遍性", "Universality across model architectures", [
        ["2.3.1", "同一族模型（GPT-2 系列 / LLaMA 系列）上的机制复用", "Reuse within model families", "evaluation"],
        ["2.3.2", "不同架构（Encoder-only / Decoder-only / Encoder-Decoder）对比", "Encoder-only/decoder-only/encoder-decoder comparisons", "evaluation"],
        ["2.3.3", "不同规模（small / base / large）模型的缩放规律", "Scaling laws across model sizes", "evaluation"],
      ]],
      ["2.4", "跨训练过程与随机种子的普遍性", "Universality across training and random seeds", [
        ["2.4.1", "训练中不同 checkpoint 的机制演化轨迹", "Mechanism trajectories across checkpoints", "evaluation"],
        ["2.4.2", "不同随机种子初始化下的机制重现率", "Reproduction across random seeds", "evaluation"],
        ["2.4.3", "不同预训练语料/目标（LM / MLM / RLHF）对机制的影响", "Effects of pretraining corpus/objective", "evaluation"],
      ]],
    ],
  },
  {
    n: "3",
    zh: "如何定位某种机制具体发生的位置",
    en: "How to localize where a mechanism occurs",
    articles: [
      ["3.1", "基于 logit lens / 早期解码的层级定位", "Layer localization with logit lens / early decoding", [
        ["3.1.1", "Layer-wise logit lens：每层隐藏状态到词表的映射", "Layer-wise logit lens", "logit"],
        ["3.1.2", "Token 位置 × 层 × logit 相似度热力图", "Position × layer × logit similarity heatmaps", "logit"],
        ["3.1.3", "关键层识别：机制首次显著“显影”的层", "Identifying the first salient layer", "logit"],
      ]],
      ["3.2", "基于 linear probing 的子空间定位", "Subspace localization with linear probing", [
        ["3.2.1", "在层输出上的线性 probe（分类边界位置）", "Linear probes on layer outputs", "probing"],
        ["3.2.2", "在特定 module 输出（Attention/MLP）上的 probe", "Probes on Attention/MLP outputs", "probing"],
        ["3.2.3", "Token 级 probe（序列中哪些位置承担该机制）", "Token-level probes", "probing"],
        ["3.2.4", "跨层 probe 性能曲线与“峰值层”定位", "Cross-layer probe curves and peak-layer localization", "probing"],
      ]],
      ["3.3", "基于 SAE 的特征位置与模块定位", "Feature and module localization with SAEs", [
        ["3.3.1", "在某一层激活上训练 SAE（feature map → 特征索引）", "Training a layer SAE", "sae"],
        ["3.3.2", "SAE 特征与 neuron / head 的对应关系（重构贡献分析）", "SAE-feature correspondence to neurons/heads", "sae"],
        ["3.3.3", "不同层 SAE 对同一概念的特征密度对比", "Feature density comparisons across layers", "sae"],
        ["3.3.4", "跨层对齐 SAE 特征（layer-wise concept alignment）", "Cross-layer SAE feature alignment", "sae"],
      ]],
      ["3.4", "基于注意力与路由的模块定位", "Module localization with attention and routing", [
        ["3.4.1", "Attention pattern 中的机制头识别（IOI 头、induction 头等）", "Mechanism-head identification in attention patterns", "attention"],
        ["3.4.2", "Query/Key/Value 子空间上的机制向量定位", "Mechanism vectors in Q/K/V subspaces", "attention"],
        ["3.4.3", "Router / Mixture-of-Experts 中专家模块的机制聚集", "Mechanism concentration in router/MoE experts", "attention"],
      ]],
      ["3.5", "基于梯度与归因的精细位置定位", "Fine localization with gradients and attribution", [
        ["3.5.1", "输出对各层/各头/各 neuron 的梯度敏感性分析", "Gradient sensitivity for layers/heads/neurons", "attribution"],
        ["3.5.2", "Integrated Gradients / DeepLIFT 等路径积分归因", "Integrated Gradients / DeepLIFT path attribution", "attribution"],
        ["3.5.3", "反向传播到输入 token / embedding 的定位", "Backpropagation to input tokens/embeddings", "attribution"],
      ]],
    ],
  },
  {
    n: "4",
    zh: "如何刻画某种机制的空间结构",
    en: "How to characterize a mechanism's spatial structure",
    articles: [
      ["4.1", "向量空间结构（特征几何）", "Vector-space structure and feature geometry", [
        ["4.1.1", "线性方向与子空间：主成分、特征基、正交性", "Linear directions and subspaces", "subspace"],
        ["4.1.2", "Cluster / manifold：机制相关表示的聚类与流形结构", "Clusters and manifolds", "subspace"],
        ["4.1.3", "Superposition 分析：多机制共享子空间的重叠与干扰", "Superposition overlap and interference", "sae"],
        ["4.1.4", "特征稀疏化与旋转（SAE / 旋转基变换）", "Feature sparsification and rotations", "sae"],
      ]],
      ["4.2", "层级空间结构（跨层通路）", "Layer-wise structure and cross-layer paths", [
        ["4.2.1", "层间 feature transport：同一机制在不同层的编码形态", "Feature transport across layers", "subspace"],
        ["4.2.2", "残差路径与 shortcut 上的机制传递", "Residual paths and shortcut transport", "logit"],
        ["4.2.3", "“早层粗编码–中层抽象–末层决策”的结构模式", "Early encoding, middle abstraction, late decision", "logit"],
      ]],
      ["4.3", "模块内空间结构（module-level micro-architecture）", "Module-level micro-architecture", [
        ["4.3.1", "MLP 内部维度上的子空间分解（gate/val/feature 维度）", "MLP gate/value/feature subspaces", "subspace"],
        ["4.3.2", "Attention 中 Q/K/V 空间的结构差异与对齐关系", "Q/K/V structure and alignment", "attention"],
        ["4.3.3", "专家模块（MoE）的空间分工与重叠", "MoE expert specialization and overlap", "subspace"],
      ]],
      ["4.4", "Token 维空间结构（位置与上下文）", "Token-axis structure: position and context", [
        ["4.4.1", "不同位置 token 表示的空间分布（positional manifold）", "Spatial distribution of token positions", "subspace"],
        ["4.4.2", "上下文窗口内的局部子空间：n-gram / 句子级表示", "Local context subspaces", "subspace"],
        ["4.4.3", "文档/global 级别的表示（CLS token / pooling vector）", "Document/global representations", "subspace"],
      ]],
      ["4.5", "机制网络结构（feature / circuit graph）", "Mechanism network structure", [
        ["4.5.1", "feature graph：特征节点 + 权重边的拓扑结构", "Feature graphs", "sae"],
        ["4.5.2", "circuit 级别：head→neuron→head 的有向图", "Circuit-level directed graphs", "activation"],
        ["4.5.3", "多机制交互网络：抑制/增强/竞争关系的图模型", "Interaction graphs between mechanisms", "evaluation"],
      ]],
    ],
  },
  {
    n: "5",
    zh: "如何验证某种机制存在因果效应",
    en: "How to verify causal effects of a mechanism",
    articles: [
      ["5.1", "局部消融（ablation）实验设计", "Local ablation experiment design", [
        ["5.1.1", "Layer 级消融：单层/多层输出置零或替换", "Layer-level ablation", "intervention"],
        ["5.1.2", "Head 级消融：单头 / 头组 / 随机子集消融", "Head-level ablation", "intervention"],
        ["5.1.3", "Neuron / Feature 级消融：按重要度排序后剪切", "Neuron/feature ablation", "intervention"],
        ["5.1.4", "Subspace 消融：在特定子空间上投影并去除分量", "Subspace ablation", "intervention"],
      ]],
      ["5.2", "激活 patching（替换）与对照实验", "Activation patching and controlled contrasts", [
        ["5.2.1", "Token 级 patching：在相同位置替换激活", "Token-level patching", "activation"],
        ["5.2.2", "Layer / Module 级 patching：源案例 → 目标案例", "Layer/module-level patching", "activation"],
        ["5.2.3", "SAE 特征级 patching：打开 / 关闭单个 feature", "SAE feature-level patching", "sae"],
        ["5.2.4", "Patch matrix 分析：位置×层×模块的因果贡献图", "Patch-matrix analysis", "activation"],
      ]],
      ["5.3", "因果干预与反事实构造", "Causal interventions and counterfactual construction", [
        ["5.3.1", "do-intervention 风格：强制设定某层/某头的值", "do-intervention style activation setting", "intervention"],
        ["5.3.2", "反事实输入构造：只改变单一因素（如一个 token）", "Counterfactual inputs changing one factor", "activation"],
        ["5.3.3", "机制相关变量的结构方程建模（简化 SEM）", "Simplified structural-equation modeling", "intervention"],
      ]],
      ["5.4", "效应量度量与统计显著性", "Effect sizes and statistical significance", [
        ["5.4.1", "输出行为变化度量（logit / 概率 / 任务指标的变化）", "Output behavior change metrics", "evaluation"],
        ["5.4.2", "多样本重复试验与置信区间估计", "Repeated trials and confidence intervals", "evaluation"],
        ["5.4.3", "负对照与 placebo 实验（对无关模块干预）", "Negative controls and placebo interventions", "evaluation"],
      ]],
      ["5.5", "多层次因果链路分析", "Multi-level causal chain analysis", [
        ["5.5.1", "层级因果链：从早层干预到末层行为的传播路径", "Layer-wise causal chains", "activation"],
        ["5.5.2", "多模块协同干预：联合 ablation / patching", "Joint multi-module interventions", "intervention"],
        ["5.5.3", "机制间因果交互（抑制链、补偿链）", "Causal interactions between mechanisms", "evaluation"],
      ]],
    ],
  },
  {
    n: "6",
    zh: "如何验证某种机制的专一性",
    en: "How to verify mechanism specificity",
    articles: [
      ["6.1", "任务/属性专一性", "Task and attribute specificity", [
        ["6.1.1", "仅在特定任务上活跃的机制检测", "Task-specific activation", "evaluation"],
        ["6.1.2", "单一属性（如情感/数值/语法）选择性的 probe", "Attribute-selective probes", "probing"],
        ["6.1.3", "多任务联合测试下的 selectivity 曲线", "Selectivity curves across tasks", "evaluation"],
      ]],
      ["6.2", "Token / 上下文专一性", "Token and context specificity", [
        ["6.2.1", "输入 token 类型专一性（仅对数字、名字等敏感）", "Input-token-type specificity", "evaluation"],
        ["6.2.2", "上下文依赖专一性（特定模式 / 模板下才激活）", "Context-dependent specificity", "activation"],
        ["6.2.3", "位置专一性（仅序列中特定 pos range 激活）", "Position specificity", "activation"],
      ]],
      ["6.3", "位置 / 模块专一性", "Location and module specificity", [
        ["6.3.1", "仅在某几层出现的机制（layer-specific features）", "Layer-specific features", "sae"],
        ["6.3.2", "特定 head / neuron / SAE feature 的编码专一性", "Specific heads/neurons/SAE features", "sae"],
        ["6.3.3", "共享 vs 专用模块的比较（如 MoE 专家 vs 通用层）", "Shared vs dedicated modules", "evaluation"],
      ]],
      ["6.4", "表示空间中的专一性", "Specificity in representation space", [
        ["6.4.1", "子空间重叠度测量（投影重叠、CCA、子空间角度）", "Subspace overlap metrics", "subspace"],
        ["6.4.2", "稀疏性与独立性度量（L0/L1 稀疏度、互信息）", "Sparsity and independence metrics", "sae"],
        ["6.4.3", "superposition 下的“解耦难度”评估", "Disentanglement difficulty under superposition", "sae"],
      ]],
      ["6.5", "干预下的专一性验证", "Specificity under intervention", [
        ["6.5.1", "只干预该机制时，目标行为变化 vs 其他行为稳定性", "Target change vs off-target stability", "evaluation"],
        ["6.5.2", "交叉干预：干预其他机制看本机制行为是否变化", "Cross-intervention tests", "intervention"],
        ["6.5.3", "专一性评分指标（task-specific vs general impact ratio）", "Specificity scoring", "evaluation"],
      ]],
    ],
  },
  {
    n: "7",
    zh: "如何精准干预某种机制",
    en: "How to precisely intervene on a mechanism",
    articles: [
      ["7.1", "表示空间级 steering", "Representation-space steering", [
        ["7.1.1", "Embedding 级方向添加（prompt embedding steering）", "Embedding-level direction addition", "steering"],
        ["7.1.2", "Layer hidden state 级 steering 向量注入", "Hidden-state steering vectors", "steering"],
        ["7.1.3", "在 SAE 特征空间中开/关/缩放特定 feature", "SAE feature on/off/scaling", "steering"],
      ]],
      ["7.2", "Attention 级 rerouting", "Attention-level rerouting", [
        ["7.2.1", "直接修改 attention pattern（mask / reweight）", "Direct attention mask/reweighting", "attention"],
        ["7.2.2", "Head 级 “路由重定向”：替换 query/key/value 子空间", "Head-level Q/K/V rerouting", "attention"],
        ["7.2.3", "将注意力从危险 token 重定向到安全 token（安全应用）", "Rerouting from unsafe to safe tokens", "attention"],
      ]],
      ["7.3", "Module / Layer 级重写", "Module/layer-level rewriting", [
        ["7.3.1", "对特定层进行 LoRA / adapter 微调实现机制定向修改", "LoRA/adapter edits on specific layers", "editing"],
        ["7.3.2", "对特定模块（MLP/Attention）权重进行 fine-grained edit", "Fine-grained edits to MLP/Attention weights", "editing"],
        ["7.3.3", "使用 ROME/FTD 等“权重编辑”方法对知识级机制定向修改", "ROME/weight editing for knowledge mechanisms", "editing"],
      ]],
      ["7.4", "机制级控制策略设计", "Mechanism-level control strategies", [
        ["7.4.1", "机制强度控制（gain control / scaling）", "Gain control and scaling", "steering"],
        ["7.4.2", "激活门控（gating）：条件性开启或关闭某机制", "Conditional activation gating", "steering"],
        ["7.4.3", "多机制协同 steering（联动多个 feature/circuit）", "Coordinated multi-mechanism steering", "steering"],
      ]],
      ["7.5", "干预鲁棒性与副作用评估", "Intervention robustness and side-effect evaluation", [
        ["7.5.1", "干预前后性能与分布稳定性测试", "Performance and distribution stability", "evaluation"],
        ["7.5.2", "对无关任务/样本的影响评估（off-target effects）", "Off-target effect evaluation", "evaluation"],
        ["7.5.3", "干预在不同模型与版本上的迁移性能", "Transfer across models and versions", "evaluation"],
      ]],
    ],
  },
  {
    n: "8",
    zh: "如何利用某种机制以提高模型表现",
    en: "How to use mechanisms to improve model performance",
    articles: [
      ["8.1", "利用已知机制优化训练目标", "Optimize training objectives with known mechanisms", [
        ["8.1.1", "将机制相关指标纳入 loss（regularization / auxiliary loss）", "Mechanism metrics as regularizers/auxiliary losses", "optimization"],
        ["8.1.2", "利用 SAE/feature 稀疏性做结构正则（减少 superposition）", "SAE/feature sparsity as structural regularization", "optimization"],
        ["8.1.3", "针对特定机制定制 curriculum / data selection", "Mechanism-aware curricula and data selection", "optimization"],
      ]],
      ["8.2", "利用机制改造模型结构", "Improve architecture with mechanisms", [
        ["8.2.1", "基于观测 circuit 设计新的模块连接（shortcut / gating）", "Circuit-informed shortcuts/gating", "optimization"],
        ["8.2.2", "将有用机制显式模块化（变成可重用“功能块”）", "Modularizing useful mechanisms", "optimization"],
        ["8.2.3", "精简或剪枝无关机制以提升效率（head / neuron pruning）", "Pruning irrelevant heads/neurons", "optimization"],
      ]],
      ["8.3", "利用机制提升下游任务性能", "Improve downstream task performance", [
        ["8.3.1", "在 finetune 中专门保护/放大关键机制", "Preserve/amplify key mechanisms during finetuning", "optimization"],
        ["8.3.2", "利用 steering 向量提升特定能力（推理、一致性等）", "Steering vectors for specific abilities", "steering"],
        ["8.3.3", "利用机制改善对抗鲁棒性/安全性（抑制有害模式）", "Mechanism-based robustness and safety", "optimization"],
      ]],
      ["8.4", "利用机制改进对齐与安全", "Improve alignment and safety", [
        ["8.4.1", "找到与有害行为相关的机制并定向抑制", "Suppress harmful-behavior mechanisms", "steering"],
        ["8.4.2", "为 value-aligned 行为构造支持机制并放大", "Amplify value-aligned support mechanisms", "steering"],
        ["8.4.3", "基于机制的实时监控与触发式安全防护", "Mechanism-based monitoring and triggered safeguards", "optimization"],
      ]],
      ["8.5", "机制驱动的自动化工具与 pipeline", "Mechanism-driven automated tools and pipelines", [
        ["8.5.1", "自动扫描机制 → 推荐干预策略 → 自动评估的 workflow", "Scan, recommend intervention, and evaluate workflow", "optimization"],
        ["8.5.2", "将 mech interp 指标集成进模型评估 dashboard", "Mech-interp metrics in dashboards", "optimization"],
        ["8.5.3", "面向研究社区的可重用机制库（circuits/feature catalog）", "Reusable community mechanism catalogs", "optimization"],
      ]],
    ],
  },
];

const state = {
  lang: localStorage.getItem("lang") || "zh",
};

const $ = (selector) => document.querySelector(selector);
const content = $("#content");
const toc = $("#toc");
const search = $("#search");
const langSelect = $("#language");

function slug(n) {
  return `s-${n.replaceAll(".", "-")}`;
}

function esc(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[ch]);
}

const refKeys = Object.keys(refs);

function refNumber(key) {
  return refKeys.indexOf(key) + 1;
}

function cite(refIds) {
  return `<sup class="citation">${refIds
    .filter((key) => refs[key])
    .map((key) => `<a href="#/references/${key}" title="${esc(refs[key].title)}">${refNumber(key)}</a>`)
    .join(",")}</sup>`;
}

function renderVisualization(kind) {
  const t = texts[state.lang];
  const visual = visualizations[kind];
  const ref = refs[visual.ref];
  const caption = visual[state.lang];
  const image = visual.image
    ? `<a class="figure-link" href="${visual.fallback || ref.url}" target="_blank" rel="noreferrer">
        <img src="${visual.image}" alt="${esc(caption)}" loading="lazy" onerror="this.closest('figure').classList.add('image-missing')" />
      </a>`
    : `<a class="figure-placeholder" href="${visual.fallback || ref.url}" target="_blank" rel="noreferrer">
        <span>${t.source}</span>
        <strong>${ref.title}</strong>
      </a>`;
  return `
    <figure class="paper-figure">
      ${image}
      <figcaption>${caption}${cite([visual.ref])} <a href="${visual.fallback || ref.url}" target="_blank" rel="noreferrer">${t.source}</a></figcaption>
    </figure>
  `;
}

function titleOf(node) {
  return state.lang === "zh" ? node.zh : node.en;
}

function titleFromTuple(tuple) {
  return state.lang === "zh" ? tuple[1] : tuple[2];
}

function getArticle(articleId) {
  for (const chapter of outline) {
    const article = chapter.articles.find((item) => item[0] === articleId);
    if (article) return { chapter, article };
  }
  return null;
}

function allArticles() {
  return outline.flatMap((chapter) => chapter.articles.map((article) => ({ chapter, article })));
}

function renderChrome() {
  const t = texts[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  $("#brandTitle").textContent = t.brand;
  $("#brandSub").textContent = t.subtitle;
  $("#searchLabel").textContent = t.search;
  search.placeholder = t.placeholder;
  $("#langLabel").textContent = t.language;
  $("#allLink").textContent = t.all;
  $("#refsLink").textContent = t.references;
  langSelect.value = state.lang;
}

function renderToc(activeArticle = "", activeSection = "") {
  toc.innerHTML = outline.map((chapter) => `
    <details class="toc-chapter" open>
      <summary>${chapter.n} ${titleOf(chapter)}</summary>
      ${chapter.articles.map((article) => `
        <div class="toc-article">
          <a class="${activeArticle === article[0] ? "active" : ""}" href="#/article/${article[0]}">${article[0]} ${titleFromTuple(article)}</a>
          <div class="toc-sections">
            ${article[3].map((section) => `
              <a class="${activeSection === section[0] ? "active" : ""}" href="#/article/${article[0]}/${section[0]}">${section[0]} ${titleFromTuple(section)}</a>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </details>
  `).join("");
}

function renderHome() {
  const t = texts[state.lang];
  renderToc();
  content.innerHTML = `
    <article class="article home-article">
      <p class="kicker">${t.toc}</p>
      <h1>${t.introTitle}</h1>
      <p class="lead">${t.introBody}</p>
      <section class="article-index">
        <h2>${t.latest}</h2>
        ${outline.map((chapter) => `
          <div class="index-group">
            <h3>${chapter.n} ${titleOf(chapter)}</h3>
            <ol>
              ${chapter.articles.map((article) => `<li><a href="#/article/${article[0]}">${article[0]} ${titleFromTuple(article)}</a></li>`).join("")}
            </ol>
          </div>
        `).join("")}
      </section>
    </article>
  `;
}

function renderArticle(articleId, sectionId = "") {
  const found = getArticle(articleId) || getArticle("1.1");
  const { chapter, article } = found;
  const t = texts[state.lang];
  renderToc(article[0], sectionId);
  content.innerHTML = `
    <article class="article">
      <p class="kicker">${chapter.n} ${titleOf(chapter)}</p>
      <h1>${article[0]} ${titleFromTuple(article)}</h1>
      <p class="lead">${articleLead(article)}</p>
      <nav class="in-article-nav" aria-label="${t.related}">
        ${article[3].map((section) => `<a href="#${slug(section[0])}">${section[0]}</a>`).join("")}
      </nav>
      ${article[3].map((section) => renderSection(section)).join("")}
    </article>
  `;
  if (sectionId) {
    requestAnimationFrame(() => document.getElementById(slug(sectionId))?.scrollIntoView());
  }
}

function articleLead(article) {
  if (state.lang === "zh") {
    return `这篇文章对应目录 ${article[0]}，用于把「${article[1]}」转化成可执行研究步骤。每个小节都给出适用方法、数学直觉、实验场景、风险与代码骨架。`;
  }
  return `This article corresponds to section ${article[0]} and turns “${article[2]}” into executable research steps. Each section includes method choice, mathematical intuition, examples, risks, and code skeletons.`;
}

function renderSection(section) {
  const t = texts[state.lang];
  const technique = techniques[section[3]];
  const copy = technique[state.lang];
  return `
    <section id="${slug(section[0])}" class="method-section">
      <h2>${section[0]} ${titleFromTuple(section)}</h2>
      <div class="method-body">
        <h3>${t.math}</h3>
        <p>${copy.math}${cite(technique.refs.slice(0, 2))}</p>
        <h3>${t.use}</h3>
        <p>${copy.use}${cite(technique.refs.slice(0, 1))}</p>
        <h3>${t.pros}</h3>
        <p>${copy.pros}${cite(technique.refs)}</p>
        <h3>${t.cons}</h3>
        <p>${copy.cons}${cite(technique.refs.slice(-1))}</p>
        <h3>${t.visual}</h3>
        ${renderVisualization(section[3])}
        <h3>${t.code}</h3>
        <pre><code>${esc(copy.code)}</code></pre>
        <h3>${t.cite}</h3>
        <p class="refs">${technique.refs.map((key) => `<a href="${refs[key].url}" target="_blank" rel="noreferrer">${refs[key].title}</a>`).join("")}</p>
      </div>
    </section>
  `;
}

function renderReferences(highlightKey = "") {
  const t = texts[state.lang];
  renderToc();
  content.innerHTML = `
    <article class="article">
      <p class="kicker">${t.references}</p>
      <h1>${t.references}</h1>
      <p class="lead">${t.referenceIntro}</p>
      <ol class="bibliography">
        ${Object.entries(refs).map(([key, ref]) => `<li id="ref-${key}" class="${highlightKey === key ? "highlight-ref" : ""}"><a href="${ref.url}" target="_blank" rel="noreferrer">${ref.title}</a></li>`).join("")}
      </ol>
    </article>
  `;
  if (highlightKey) {
    requestAnimationFrame(() => document.getElementById(`ref-${highlightKey}`)?.scrollIntoView({ block: "center" }));
  }
}

function renderSearch() {
  const t = texts[state.lang];
  const q = search.value.trim().toLowerCase();
  if (!q) {
    route();
    return;
  }
  renderToc();
  const rows = allArticles().flatMap(({ chapter, article }) => {
    const articleText = `${chapter.n} ${chapter.zh} ${chapter.en} ${article[0]} ${article[1]} ${article[2]}`.toLowerCase();
    const articleMatch = articleText.includes(q);
    const sectionMatches = article[3].filter((section) => `${section[0]} ${section[1]} ${section[2]}`.toLowerCase().includes(q));
    return articleMatch || sectionMatches.length
      ? [{ chapter, article, sections: sectionMatches.length ? sectionMatches : article[3] }]
      : [];
  });

  content.innerHTML = `
    <article class="article">
      <p class="kicker">${t.search}</p>
      <h1>${esc(search.value)}</h1>
      ${
        rows.length
          ? `<div class="search-results">${rows.map(({ article, sections }) => `
              <section>
                <h2><a href="#/article/${article[0]}">${article[0]} ${titleFromTuple(article)}</a></h2>
                <ul>${sections.map((section) => `<li><a href="#/article/${article[0]}/${section[0]}">${section[0]} ${titleFromTuple(section)}</a></li>`).join("")}</ul>
              </section>
            `).join("")}</div>`
          : `<p class="lead">${t.noResults}</p>`
      }
    </article>
  `;
}

function route() {
  if (search.value.trim()) {
    renderSearch();
    return;
  }
  const parts = (window.location.hash || "#/").replace("#/", "").split("/");
  if (!parts[0]) renderHome();
  else if (parts[0] === "article") renderArticle(parts[1], parts[2]);
  else if (parts[0] === "references") renderReferences(parts[1]);
  else renderHome();
}

langSelect.addEventListener("change", () => {
  state.lang = langSelect.value;
  localStorage.setItem("lang", state.lang);
  renderChrome();
  route();
});

search.addEventListener("input", renderSearch);
window.addEventListener("hashchange", route);

renderChrome();
route();
