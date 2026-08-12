# 1 如何验证某种机制的存在性

1.1 基于激活模式的存在性检验（按位置划分）

- 1.1.1 Layer 级平均激活与分布检验
- 1.1.2 Attention Head 级模式检测（注意力模式/注意力可视化）
- 1.1.3 Neuron / Feature 级激活谱分析
- 1.1.4 Token 级激活轨迹（随序列位置与 token 类型变化）

1.2 基于 probing 的判别式存在性检验

- 1.2.1 Layer 级线性 probing（线性分类器/回归器）
- 1.2.2 Token 表征上的 probing（输入 / 中间 / 输出 token）
- 1.2.3 Module 输出上的 probing（FFN 输出、Attention 输出）
- 1.2.4 多层联合 probing（跨层拼接、分层 probe）

1.3 基于表示子空间的存在性检验

- 1.3.1 PCA / ICA / NMF 等无监督分解的子空间检测
- 1.3.2 已知方向投影（e.g. 情感、语法等方向的投影分数）
- 1.3.3 SAE（Sparse Autoencoder）特征存在性分析
- 1.3.4 DCM / concept subspace 等可解释子空间的对比

1.4 基于行为对比的存在性检验

- 1.4.1 触发 / 不触发条件下的输出差异（输入对照实验）
- 1.4.2 随机化 / 置换基线（随机头、随机层对比）
- 1.4.3 小模型 vs 大模型的机制迁移（architecture scaling 对比）

---

# 2 如何验证某种机制的普遍性

2.1 跨 token / 跨任务的普遍性

- 2.1.1 不同 token 类型、频率、类别上的稳定性测试
- 2.1.2 不同任务/数据分布上的机制再现（问答 / 翻译 / 推理）
- 2.1.3 分布外（OOD）样本与对抗样本上的机制稳定性

2.2 跨 layer / 跨 module 的普遍性

- 2.2.1 不同层同类模式的分布（机制在层间的“带宽”）
- 2.2.2 不同模块（Attention / MLP / Embedding）的机制复现
- 2.2.3 跨层累积效应：早层 vs 中层 vs 末层 的对比研究

2.3 跨模型架构的普遍性

- 2.3.1 同一族模型（GPT-2 系列 / LLaMA 系列）上的机制复用
- 2.3.2 不同架构（Encoder-only / Decoder-only / Encoder-Decoder）对比
- 2.3.3 不同规模（small / base / large）模型的缩放规律

2.4 跨训练过程与随机种子的普遍性

- 2.4.1 训练中不同 checkpoint 的机制演化轨迹
- 2.4.2 不同随机种子初始化下的机制重现率
- 2.4.3 不同预训练语料/目标（LM / MLM / RLHF）对机制的影响

---

# 3 如何定位某种机制具体发生的位置

（linear probing / logit lens / SAE / DCM 等）

3.1 基于 logit lens / 早期解码的层级定位

- 3.1.1 Layer-wise logit lens：每层隐藏状态到词表的映射
- 3.1.2 Token 位置 × 层 × logit 相似度热力图
- 3.1.3 关键层识别：机制首次显著“显影”的层

3.2 基于 linear probing 的子空间定位

- 3.2.1 在层输出上的线性 probe（分类边界位置）
- 3.2.2 在特定 module 输出（Attention/MLP）上的 probe
- 3.2.3 Token 级 probe（序列中哪些位置承担该机制）
- 3.2.4 跨层 probe 性能曲线与“峰值层”定位

3.3 基于 SAE 的特征位置与模块定位

- 3.3.1 在某一层激活上训练 SAE（feature map → 特征索引）
- 3.3.2 SAE 特征与 neuron / head 的对应关系（重构贡献分析）
- 3.3.3 不同层 SAE 对同一概念的特征密度对比
- 3.3.4 跨层对齐 SAE 特征（layer-wise concept alignment）

3.4 基于注意力与路由的模块定位

- 3.4.1 Attention pattern 中的机制头识别（IOI 头、induction 头等）
- 3.4.2 Query/Key/Value 子空间上的机制向量定位
- 3.4.3 Router / Mixture-of-Experts 中专家模块的机制聚集

3.5 基于梯度与归因的精细位置定位

- 3.5.1 输出对各层/各头/各 neuron 的梯度敏感性分析
- 3.5.2 Integrated Gradients / DeepLIFT 等路径积分归因
- 3.5.3 反向传播到输入 token / embedding 的定位

---

# 4 如何刻画某种机制的空间结构

4.1 向量空间结构（特征几何）

- 4.1.1 线性方向与子空间：主成分、特征基、正交性
- 4.1.2 Cluster / manifold：机制相关表示的聚类与流形结构
- 4.1.3 Superposition 分析：多机制共享子空间的重叠与干扰
- 4.1.4 特征稀疏化与旋转（SAE / 旋转基变换）

4.2 层级空间结构（跨层通路）

- 4.2.1 层间 feature transport：同一机制在不同层的编码形态
- 4.2.2 残差路径与 shortcut 上的机制传递
- 4.2.3 “早层粗编码–中层抽象–末层决策”的结构模式

4.3 模块内空间结构（module-level micro-architecture）

- 4.3.1 MLP 内部维度上的子空间分解（gate/val/feature 维度）
- 4.3.2 Attention 中 Q/K/V 空间的结构差异与对齐关系
- 4.3.3 专家模块（MoE）的空间分工与重叠

4.4 Token 维空间结构（位置与上下文）

- 4.4.1 不同位置 token 表示的空间分布（positional manifold）
- 4.4.2 上下文窗口内的局部子空间：n-gram / 句子级表示
- 4.4.3 文档/global 级别的表示（CLS token / pooling vector）

4.5 机制网络结构（feature / circuit graph）

- 4.5.1 feature graph：特征节点 + 权重边的拓扑结构
- 4.5.2 circuit 级别：head→neuron→head 的有向图
- 4.5.3 多机制交互网络：抑制/增强/竞争关系的图模型

---

# 5 如何验证某种机制存在因果效应

（ablation / intervention / activation patching 等）

5.1 局部消融（ablation）实验设计

- 5.1.1 Layer 级消融：单层/多层输出置零或替换
- 5.1.2 Head 级消融：单头 / 头组 / 随机子集消融
- 5.1.3 Neuron / Feature 级消融：按重要度排序后剪切
- 5.1.4 Subspace 消融：在特定子空间上投影并去除分量

5.2 激活 patching（替换）与对照实验

- 5.2.1 Token 级 patching：在相同位置替换激活
- 5.2.2 Layer / Module 级 patching：源案例 → 目标案例
- 5.2.3 SAE 特征级 patching：打开 / 关闭单个 feature
- 5.2.4 Patch matrix 分析：位置×层×模块的因果贡献图

5.3 因果干预与反事实构造

- 5.3.1 do-intervention 风格：强制设定某层/某头的值
- 5.3.2 反事实输入构造：只改变单一因素（如一个 token）
- 5.3.3 机制相关变量的结构方程建模（简化 SEM）

5.4 效应量度量与统计显著性

- 5.4.1 输出行为变化度量（logit / 概率 / 任务指标的变化）
- 5.4.2 多样本重复试验与置信区间估计
- 5.4.3 负对照与 placebo 实验（对无关模块干预）

5.5 多层次因果链路分析

- 5.5.1 层级因果链：从早层干预到末层行为的传播路径
- 5.5.2 多模块协同干预：联合 ablation / patching
- 5.5.3 机制间因果交互（抑制链、补偿链）

---

# 6 如何验证某种机制的专一性

6.1 任务/属性专一性

- 6.1.1 仅在特定任务上活跃的机制检测
- 6.1.2 单一属性（如情感/数值/语法）选择性的 probe
- 6.1.3 多任务联合测试下的 selectivity 曲线

6.2 Token / 上下文专一性

- 6.2.1 输入 token 类型专一性（仅对数字、名字等敏感）
- 6.2.2 上下文依赖专一性（特定模式 / 模板下才激活）
- 6.2.3 位置专一性（仅序列中特定 pos range 激活）

6.3 位置 / 模块专一性

- 6.3.1 仅在某几层出现的机制（layer-specific features）
- 6.3.2 特定 head / neuron / SAE feature 的编码专一性
- 6.3.3 共享 vs 专用模块的比较（如 MoE 专家 vs 通用层）

6.4 表示空间中的专一性

- 6.4.1 子空间重叠度测量（投影重叠、CCA、子空间角度）
- 6.4.2 稀疏性与独立性度量（L0/L1 稀疏度、互信息）
- 6.4.3 superposition 下的“解耦难度”评估

6.5 干预下的专一性验证

- 6.5.1 只干预该机制时，目标行为变化 vs 其他行为稳定性
- 6.5.2 交叉干预：干预其他机制看本机制行为是否变化
- 6.5.3 专一性评分指标（task-specific vs general impact ratio）

---

# 7 如何精准干预某种机制

（steering / rerouting 等）

7.1 表示空间级 steering

- 7.1.1 Embedding 级方向添加（prompt embedding steering）
- 7.1.2 Layer hidden state 级 steering 向量注入
- 7.1.3 在 SAE 特征空间中开/关/缩放特定 feature

7.2 Attention 级 rerouting

- 7.2.1 直接修改 attention pattern（mask / reweight）
- 7.2.2 Head 级 “路由重定向”：替换 query/key/value 子空间
- 7.2.3 将注意力从危险 token 重定向到安全 token（安全应用）

7.3 Module / Layer 级重写

- 7.3.1 对特定层进行 LoRA / adapter 微调实现机制定向修改
- 7.3.2 对特定模块（MLP/Attention）权重进行 fine-grained edit
- 7.3.3 使用 ROME/FTD 等“权重编辑”方法对知识级机制定向修改

7.4 机制级控制策略设计

- 7.4.1 机制强度控制（gain control / scaling）
- 7.4.2 激活门控（gating）：条件性开启或关闭某机制
- 7.4.3 多机制协同 steering（联动多个 feature/circuit）

7.5 干预鲁棒性与副作用评估

- 7.5.1 干预前后性能与分布稳定性测试
- 7.5.2 对无关任务/样本的影响评估（off-target effects）
- 7.5.3 干预在不同模型与版本上的迁移性能

---

# 8 如何利用某种机制以提高模型表现

8.1 利用已知机制优化训练目标

- 8.1.1 将机制相关指标纳入 loss（regularization / auxiliary loss）
- 8.1.2 利用 SAE/feature 稀疏性做结构正则（减少 superposition）
- 8.1.3 针对特定机制定制 curriculum / data selection

8.2 利用机制改造模型结构

- 8.2.1 基于观测 circuit 设计新的模块连接（shortcut / gating）
- 8.2.2 将有用机制显式模块化（变成可重用“功能块”）
- 8.2.3 精简或剪枝无关机制以提升效率（head / neuron pruning）

8.3 利用机制提升下游任务性能

- 8.3.1 在 finetune 中专门保护/放大关键机制
- 8.3.2 利用 steering 向量提升特定能力（推理、一致性等）
- 8.3.3 利用机制改善对抗鲁棒性/安全性（抑制有害模式）

8.4 利用机制改进对齐与安全

- 8.4.1 找到与有害行为相关的机制并定向抑制
- 8.4.2 为 value-aligned 行为构造支持机制并放大
- 8.4.3 基于机制的实时监控与触发式安全防护

8.5 机制驱动的自动化工具与 pipeline

- 8.5.1 自动扫描机制 → 推荐干预策略 → 自动评估的 workflow
- 8.5.2 将 mech interp 指标集成进模型评估 dashboard
- 8.5.3 面向研究社区的可重用机制库（circuits/feature catalog）



