// ============================================================
// 二建机电刷题 · 分章节题库数据
// 按教材章节组织，每个章节包含单选题+多选题
// 用户需完全掌握当前章节后才能解锁下一章节
// ============================================================

const chapterQuizData = {
  // ========================================================
  // 章节 1.1：机电工程常用材料
  // 覆盖知识点：金属材料 / 非金属材料 / 电工线材
  // ========================================================
  "1.1": {
    chapterId: "1.1",
    chapterName: "机电工程常用材料",
    version: "2026-10-27",
    description: "覆盖金属材料（碳素结构钢、低合金结构钢、特殊性能钢、有色金属、钢材分类）、非金属材料（砌筑/绝热/防腐材料、非金属风管、塑料及复合材料水管、高分子材料分类）、电工线材（电线、电缆、母线槽、绝缘材料）三大板块全部核心考点。",
    passingScore: 80, // 章节通关分数线（百分制）
    questions: [
      // ========== 一、金属材料 ==========
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "碳素结构钢",
        difficulty: "中",
        question: '关于碳素结构钢的特性及用途，下列说法正确的是（　）。',
        options: [
          "Q195、Q215、Q235A和Q235B可轧制成钢筋、钢板、钢管，Q235C、Q235D用于重要的焊接件",
          "碳素结构钢按屈服强度划分为Q195、Q215、Q235、Q275四个等级，数字表示抗拉强度下限值",
          "碳素结构钢含碳量越高，塑性越好，焊接性能越佳",
          "优质碳素钢不能制成钢丝、钢绞线、圆钢、高强度螺栓及预应力锚具"
        ],
        answer: 0,
        explanation: "<strong>正确答案：A</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>Q195、Q215、Q235A和Q235B塑性好、易于成型和焊接，可轧制成钢筋、钢板、钢管；Q235C、Q235D因含碳量和有害杂质控制更严，韧性更好，用于重要焊接件。<br><br><strong>B错误：</strong>Q后面的数字表示<strong>屈服强度下限值</strong>，不是抗拉强度。<br><br><strong>C错误：</strong>含碳量越高，强度和硬度越高，但<strong>塑性和焊接性能越差</strong>。<br><br><strong>D错误：</strong>优质碳素钢<strong>可以</strong>制成钢丝、钢绞线、圆钢、高强度螺栓及预应力锚具。<br><br><strong>【考点归纳】</strong>碳素结构钢：Q195~Q275，数字=屈服强度下限；含碳量↑→强度↑、塑性↓、焊接性↓；C/D级用于重要焊接件。<br><strong>【记忆口诀】</strong>Q字头看屈服，数字越大越强硬；C级D级能焊接，A级B级做钢筋。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "低合金结构钢",
        difficulty: "中",
        question: '下列钢材牌号中，属于低合金结构钢且适用于制造锅炉汽包的是（　）。',
        options: [
          "Q235",
          "Q345",
          "Q460",
          "Q195"
        ],
        answer: 2,
        explanation: "<strong>正确答案：C</strong><br><br><strong>【解析】</strong><br><strong>C正确：</strong>低合金结构钢（低合金高强度钢）包括Q295、Q345、Q390、Q420、Q460五个强度等级，主要适用于锅炉汽包、压力容器、压力管道、桥梁、重轨和轻轨等制造。其中<strong>某600MW超临界电站锅炉汽包使用Q460型钢</strong>，这是教材经典案例。<br><br><strong>A、D错误：</strong>Q235和Q195属于<strong>碳素结构钢</strong>，不是低合金结构钢。<br><br><strong>B干扰：</strong>Q345虽属低合金结构钢，但教材中Q345的典型应用是<strong>制造起重机</strong>（因其韧度好），而锅炉汽包的典型牌号是<strong>Q460</strong>。<br><br><strong>【考点归纳】</strong>低合金结构钢：Q295~Q460，五等级；用途=锅炉汽包/压力容器/压力管道/桥梁/轨道；Q460→锅炉汽包；Q345→起重机。<br><strong>【记忆口诀】</strong>低合金钢五大将：295、345、390、420、460；汽包用460，起重用345。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "特殊性能低合金高强度钢",
        difficulty: "中",
        question: '可焊接高强度钢属于（　）。',
        options: [
          "碳素结构钢",
          "低合金结构钢",
          "特殊性能低合金高强度钢",
          "合金结构钢"
        ],
        answer: 2,
        explanation: "<strong>正确答案：C</strong><br><br><strong>【解析】</strong><br><strong>C正确：</strong>特殊性能低合金高强度钢（简称特殊钢）包括：耐候钢、耐海水腐蚀钢、表面处理钢材、汽车冲压钢板、石油及天然气线钢、工程机械钢、低温钢等。<strong>可焊接高强度钢属于特殊性能低合金高强度钢</strong>。<br><br><strong>A、B、D错误：</strong>可焊接高强度钢不属于碳素结构钢、低合金结构钢或普通合金结构钢。<br><br><strong>【考点归纳】</strong>特殊性能低合金高强度钢的种类：耐候钢、耐海水腐蚀钢、表面处理钢材、汽车冲压钢板、石油及天然气线钢、工程机械钢、低温钢、可焊接高强度钢。<br><strong>【记忆口诀】</strong>特殊钢记七种：耐候耐海水、表面汽车板、石油机械低温钢；可焊高强也算它。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "钢材的类型及应用",
        difficulty: "中",
        question: '电站锅炉钢架的立柱通常采用（　）。',
        options: [
          "工字钢",
          "宽翼缘H型钢",
          "槽钢",
          "角钢"
        ],
        answer: 1,
        explanation: "<strong>正确答案：B</strong><br><br><strong>【解析】</strong><br><strong>B正确：</strong>钢材按其使用可划分为型钢、板材、管材和钢制品。电站锅炉钢架的立柱通常采用<strong>宽翼缘H型钢</strong>（如HK300b），因为H型钢截面合理、承载能力强、稳定性好。<br><br><strong>A干扰：</strong>工字钢用于制造锅炉炉墙的<strong>刚性梁</strong>（大部分采用工字钢），不是立柱。<br><br><strong>C、D错误：</strong>槽钢和角钢在锅炉钢架中也有使用，但不是立柱的典型材料。<br><br><strong>【考点归纳】</strong>锅炉钢架：立柱→宽翼缘H型钢；刚性梁→工字钢；汽包→钢板焊制圆筒形容器（中低压用碳素钢，高压用低合金钢）。<br><strong>【记忆口诀】</strong>锅炉立柱H型钢，刚性梁用工字钢，汽包钢板焊圆筒，高压低压材料不同。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "有色金属",
        difficulty: "中",
        question: '下列关于有色金属的描述中，正确的是（　）。',
        options: [
          "纯铜具有良好的导电、导热性，且属于抗磁性物质",
          "黄铜是以镍为主要合金元素的铜合金",
          "白铜是以锌为主要合金元素的铜合金",
          "铝合金按成分和工艺特点分为铸造铝合金和变形铝合金两类，其中铸造铝合金应用更广泛"
        ],
        answer: 0,
        explanation: "<strong>正确答案：A</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>铜及铜合金是有色金属中的考试重点。<strong>纯铜导电、导热性好，抗蚀、抗磁</strong>（属于抗磁性物质）。<br><br><strong>B错误：</strong>黄铜是以<strong>锌</strong>为主要合金元素的铜合金。<br><br><strong>C错误：</strong>白铜是以<strong>镍</strong>为主要合金元素的铜合金。<br><br><strong>D错误：</strong>铝合金按成分和工艺特点分为<strong>变形铝合金和铸造铝合金</strong>，表述正确，但「铸造铝合金应用更广泛「无此定论，教材强调的是变形铝合金应用更广泛。<br><br><strong>【考点归纳】</strong>有色金属重点：铜合金三大类——黄铜（锌）、青铜（锡/其他）、白铜（镍）；纯铜：导电导热+抗磁；铝合金分变形和铸造两类。<br><strong>【记忆口诀】</strong>黄铜加锌、白铜加镍、青铜加锡；纯铜导电又抗磁。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "黑色金属分类",
        difficulty: "易",
        question: '机电工程中应用最为广泛的钢材是（　）。',
        options: [
          "生铁",
          "铸铁",
          "钢",
          "铁合金"
        ],
        answer: 2,
        explanation: "<strong>正确答案：C</strong><br><br><strong>【解析】</strong><br><strong>C正确：</strong>黑色金属主要有生铁、铸铁和钢。其中<strong>钢材在机电工程中应用最为广泛</strong>。<br><br><strong>A、B、D错误：</strong>生铁主要用于炼钢和铸造；铸铁用于制造某些承压件（如汽轮机低压缸）；铁合金主要用作脱氧剂和合金添加剂，都不是机电工程中应用最广泛的。<br><br><strong>【考点归纳】</strong>黑色金属=生铁（C>2%）+铸铁（2%~3.5%）+钢（C≤2%）；钢材应用最广；钢材按使用分为型钢、板材、管材、钢制品。<br><strong>【记忆口诀】</strong>生铁铸铁加钢，碳量决定分类；钢的碳量不过2%，机电工程用最多。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "金属复合材料",
        difficulty: "中",
        question: '下列金属复合材料中，具有"电磁屏蔽性好、保温性能优良、重量轻、安装简便、成本低"等优点的是（　）。',
        options: [
          "钢塑复合管",
          "铝塑复合管",
          "钛钢复合板",
          "铜钢复合板"
        ],
        answer: 1,
        explanation: "<strong>正确答案：B</strong><br><br><strong>【解析】</strong><br><strong>B正确：</strong>铝塑复合管（PAP管）的优点：<strong>电磁屏蔽性好、保温性能优良、重量轻、安装简便、成本低</strong>。<br><br><strong>A干扰：</strong>钢塑复合管的优点是<strong>耐化学腐蚀、内壁光滑、水阻小</strong>。<br><br><strong>C、D错误：</strong>钛钢、铜钢复合板属于金属层状复合材料，主要用于耐腐蚀、导热等特殊场合，不具有上述综合优点。<br><br><strong>【考点归纳】</strong>金属复合材料：铝塑复合管（电磁屏蔽+保温+轻+成本低）；钢塑复合管（耐腐蚀+光滑+水阻小）。<br><strong>【记忆口诀】</strong>铝塑：电磁保温轻，安装成本低；钢塑：耐腐蚀，内壁光，水阻小。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "金属材料综合",
        difficulty: "高",
        question: '关于机电工程常用金属材料的说法，正确的有（　）。',
        options: [
          "锅炉水冷壁和省煤器使用的无缝钢管一般采用优质碳素钢管或低合金钢管",
          "中、低压锅炉的汽包材料常为专用的锅炉碳素钢，高压锅炉的汽包材料常用低合金钢制造",
          "灰铸铁多用于制造低中参数汽轮机的低压缸和隔板",
          "某600MW超临界电站锅炉汽包使用的就是Q345型钢",
          "机电工程施工中使用的起重机通常采用Q460型钢制造"
        ],
        answer: [0, 1, 2],
        explanation: "<strong>正确答案：A、B、C</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>锅炉水冷壁和省煤器使用的无缝钢管一般采用<strong>优质碳素钢管或低合金钢管</strong>。<br><br><strong>B正确：</strong>中、低压锅炉汽包材料常为<strong>专用锅炉碳素钢</strong>，高压锅炉汽包材料常用<strong>低合金钢</strong>制造。<br><br><strong>C正确：</strong>灰铸铁多用于制造<strong>低中参数汽轮机的低压缸和隔板</strong>。<br><br><strong>D错误：</strong>600MW超临界电站锅炉汽包使用的是<strong>Q460型钢</strong>，不是Q345。<br><br><strong>E错误：</strong>机电工程施工中使用的起重机通常采用<strong>Q345型钢</strong>制造（韧度好），不是Q460。<br><br><strong>【考点归纳】</strong>锅炉材料：水冷壁/省煤器→优质碳素钢或低合金钢；中低压汽包→碳素钢；高压汽包→低合金钢；600MW汽包→Q460；起重机→Q345。<br><strong>【易混淆点】</strong>D和E正好把Q460和Q345的用途<strong>互换</strong>了，这是命题人常用的陷阱。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "钢材分类及应用",
        difficulty: "高",
        question: '机电工程中，钢材按其使用可划分为（　）。',
        options: [
          "型钢",
          "板材",
          "管材",
          "线材",
          "钢制品"
        ],
        answer: [0, 1, 2, 4],
        explanation: "<strong>正确答案：A、B、C、E</strong><br><br><strong>【解析】</strong><br><strong>A、B、C、E正确：</strong>钢材按其使用可划分为<strong>型钢、板材、管材和钢制品</strong>四类。<br><br><strong>D错误：</strong>线材不属于按使用划分的类别。注意：教材原文为「钢材就其使用可划分为型钢、板材、管材和钢制品「，<strong>没有线材</strong>。<br><br><strong>【考点归纳】</strong>钢材四分法：型钢（H型钢、工字钢、槽钢等）、板材（厚板/中板/薄板）、管材（无缝钢管/焊接钢管等）、钢制品（焊条、管件、阀门等）。<br><strong>【记忆口诀】</strong>钢材使用四分类：型材板材加管材，还有钢制品。<br><strong>【易混淆点】</strong>容易多选「线材「，但教材明确四类不含线材。"
      },

      // ========== 二、非金属材料 ==========
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "非金属风管",
        difficulty: "中",
        question: '适用于低、中压空调系统及潮湿环境，但不适用于高压及洁净空调、酸碱性和防排烟系统的非金属风管是（　）。',
        options: [
          "玻璃纤维复合风管",
          "酚醛复合风管",
          "聚氨酯复合风管",
          "硬聚氯乙烯风管"
        ],
        answer: 1,
        explanation: "<strong>正确答案：B</strong><br><br><strong>【解析】</strong><br><strong>B正确：</strong><strong>酚醛复合风管</strong>适用于低、中压空调系统及潮湿环境，但对高压及洁净空调、酸碱性环境和防排烟系统不适用。题干描述与酚醛复合风管的特性完全匹配。<br><br><strong>A干扰：</strong>玻璃纤维复合风管适用于<strong>中压以下</strong>的空调系统，但不适用于洁净空调、酸碱性环境、防排烟系统及相对湿度90%以上的系统。<br><br><strong>C干扰：</strong>聚氨酯复合风管适用于低、中、高压<strong>洁净空调</strong>系统及潮湿环境，对酸碱性和防排烟系统不适用。注意聚氨酯可用于洁净空调，酚醛不可。<br><br><strong>D干扰：</strong>硬聚氯乙烯风管适用于<strong>洁净室含酸碱的排风系统</strong>。<br><br><strong>【考点归纳】</strong>四大非金属风管适用/不适用对照表是高频考点，务必掌握。<br><strong>【记忆口诀】</strong>酚醛低中潮（湿）；聚氨高加洁（净）；玻璃纯中下；硬聚酸和碱。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "非金属风管",
        difficulty: "高",
        question: '某洁净空调工程，系统工作压力为1200Pa（中压），要求输送含少量酸性气体的空气，且需要防排烟功能。从下列非金属风管中选择最合适的一种，正确的选择是（　）。',
        options: [
          "酚醛复合风管——因其适用于中压系统且防潮性能好",
          "聚氨酯复合风管——因其适用于中高压洁净空调系统",
          "玻璃纤维复合风管——因其适用于中压以下空调系统",
          "以上三种均不适用，应选用硬聚氯乙烯风管或采取其他防腐防排烟措施"
        ],
        answer: 3,
        explanation: "<strong>正确答案：D</strong><br><br><strong>【解析】</strong><br><strong>D正确：</strong>本题综合考查非金属风管的适用范围。题干有三个关键条件：①中压（1200Pa属中压）→三种复合风管都能满足压力要求；②含酸性气体→酚醛、聚氨酯、玻璃纤维复合风管<strong>均不适用于酸碱性环境</strong>；③需要防排烟功能→三种复合风管<strong>均不适用于防排烟系统</strong>。因此三种复合风管都不适用，应考虑硬聚氯乙烯风管（适用于含酸碱排风）或采取其他防腐防排烟措施。<br><br><strong>A、B、C错误：</strong>虽然三种风管都能满足中压要求，但<strong>都不能同时满足耐酸碱和防排烟</strong>的要求。<br><br><strong>【考点归纳】</strong>非金属风管「不适用「条件是解题关键：酚醛/聚氨/玻璃纤维复合风管<strong>都不适用于防排烟系统</strong>；酚醛/聚氨/玻璃纤维<strong>都不适用于酸碱性环境</strong>。<br><strong>【命题思路】</strong>本题模仿真题综合判断题，先给出看似满足一个条件的选项，再用另一个不满足的条件排除，考查对风管适用范围的全面掌握。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "塑料及复合材料水管",
        difficulty: "中",
        question: '关于聚丙烯管（PP管）的说法，正确的是（　）。',
        options: [
          "PP管按压力分为Ⅰ、Ⅱ、Ⅲ型，常温下工作压力分别为0.4MPa、0.6MPa和0.8MPa",
          "PP管无毒，可用于输送生活用水",
          "PP管属于热固性塑料",
          "PP管不能用于流体输送"
        ],
        answer: 0,
        explanation: "<strong>正确答案：A</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>聚丙烯管（PP管）用于流体输送，按压力分为Ⅰ、Ⅱ、Ⅲ型，其常温下的工作压力分别为<strong>0.4MPa、0.6MPa和0.8MPa</strong>。<br><br><strong>B干扰：</strong><strong>聚乙烯塑料管（PE管）</strong>无毒，可用于输送生活用水。PP管虽也可用于输送流体，但「无毒输送生活用水「是PE管的典型考点。<br><br><strong>C错误：</strong>聚丙烯（PP）属于<strong>热塑性塑料</strong>（聚乙烯、聚氯乙烯、聚丙烯、聚苯乙烯均为热塑性塑料），不是热固性塑料。<br><br><strong>D错误：</strong>PP管<strong>用于流体输送</strong>，题干已明确。<br><br><strong>【考点归纳】</strong>塑料水管：PE管（无毒、生活用水）；PP管（流体输送，分Ⅰ/Ⅱ/Ⅲ型，压力0.4/0.6/0.8MPa）；PVC-U管（建筑排水）；ABS管（耐腐蚀、耐温、耐冲击）。<br><strong>【记忆口诀】</strong>PE无毒喝口水，PP分三型压不同，PVC硬管排污水，ABS三耐工程用。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "高分子材料分类",
        difficulty: "中",
        question: '下列塑料中，属于热固性塑料的是（　）。',
        options: [
          "聚乙烯",
          "聚氯乙烯",
          "聚丙烯",
          "酚醛塑料"
        ],
        answer: 3,
        explanation: "<strong>正确答案：D</strong><br><br><strong>【解析】</strong><br><strong>D正确：</strong>热固性塑料：<strong>酚醛塑料、环氧塑料</strong>。热固性塑料加热固化后不能再软化重塑。<br><br><strong>A、B、C错误：</strong>聚乙烯、聚氯乙烯、聚丙烯均属于<strong>热塑性塑料</strong>。热塑性塑料加热可软化、可重塑。<br><br><strong>【考点归纳】</strong>热塑性塑料（加热可重塑）：聚乙烯PE、聚氯乙烯PVC、聚丙烯PP、聚苯乙烯PS。记忆：「聚xx烯「带「烯「字的都是热塑性。<br>热固性塑料（加热固化不可重塑）：酚醛塑料、环氧塑料。<br><strong>【记忆口诀】</strong>热塑「聚烯「字带火（烯），热固酚醛环氧胶。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "绝热材料",
        difficulty: "易",
        question: '下列材料中，常用于保温、保冷的各类容器、管道、通风空调管道等绝热工程的是（　）。',
        options: [
          "砌筑材料",
          "绝热材料",
          "防腐材料",
          "导电材料"
        ],
        answer: 1,
        explanation: "<strong>正确答案：B</strong><br><br><strong>【解析】</strong><br><strong>B正确：</strong>绝热材料常用于保温、保冷的各类容器、管道、通风空调管道等绝热工程。常用绝热材料有膨胀珍珠岩类、离心玻璃棉类、超细玻璃棉类、微孔硅酸壳、矿棉类、岩棉类、泡沫塑料类等。<br><br><strong>A错误：</strong>砌筑材料一般用于各类型炉窑砌筑工程。<br><br><strong>C错误：</strong>防腐材料及制品包括陶瓷制品、油漆及涂料、塑料制品、橡胶制品、玻璃钢及其制品。<br><br><strong>D错误：</strong>导电材料不属于非金属材料范畴。<br><br><strong>【考点归纳】</strong>非金属材料三大用途：砌筑材料→炉窑砌筑；绝热材料→保温保冷；防腐材料→防腐蚀保护。<br><strong>【记忆口诀】</strong>砌筑炉窑、绝热保温、防腐保护，三大用途要分清。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "非金属风管综合",
        difficulty: "高",
        question: '关于非金属复合风管的适用范围，下列说法正确的有（　）。',
        options: [
          "玻璃纤维复合风管适用于中压以下的空调系统",
          "酚醛复合风管适用于低、中压空调系统及潮湿环境",
          "聚氨酯复合风管适用于低、中、高压洁净空调系统及潮湿环境",
          "玻璃纤维复合风管不适用于相对湿度90%以上的系统",
          "硬聚氯乙烯风管适用于中压空调系统"
        ],
        answer: [0, 1, 2, 3],
        explanation: "<strong>正确答案：A、B、C、D</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>玻璃纤维复合风管适用于<strong>中压以下</strong>的空调系统。<br><strong>B正确：</strong>酚醛复合风管适用于<strong>低、中压空调系统及潮湿环境</strong>。<br><strong>C正确：</strong>聚氨酯复合风管适用于<strong>低、中、高压洁净空调系统及潮湿环境</strong>。<br><strong>D正确：</strong>玻璃纤维复合风管不适用于<strong>相对湿度90%以上</strong>的系统。<br><strong>E错误：</strong>硬聚氯乙烯风管适用于<strong>洁净室含酸碱的排风系统</strong>，不是中压空调系统。<br><br><strong>【考点归纳】</strong>非金属风管适用范围速记表：<br>| 风管类型 | 适用范围 | 不适用范围 |<br>| 酚醛复合 | 低中压+潮湿 | 高压、洁净、酸碱、防排烟 |<br>| 聚氨酯复合 | 低中高压+洁净+潮湿 | 酸碱、防排烟 |<br>| 玻璃纤维复合 | 中压以下 | 洁净、酸碱、防排烟、湿度>90% |<br>| 硬聚氯乙烯 | 含酸碱排风 | — |<br><strong>【记忆口诀】</strong>酚醛低中潮；聚氨高加洁；玻璃纯中下；硬聚酸和碱。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "塑料及复合材料水管",
        difficulty: "中",
        question: '关于机电工程常用塑料及复合材料水管的说法，正确的有（　）。',
        options: [
          "聚乙烯塑料管无毒，可用于输送生活用水",
          "硬聚氯乙烯排水管用于建筑工程排水，也可用于工业排水系统",
          "ABS工程塑料管具有耐腐蚀、耐温、耐冲击的性能",
          "聚丙烯管（PP管）按压力分为Ⅰ、Ⅱ、Ⅲ型，常温工作压力分别为0.4MPa、0.6MPa和0.8MPa",
          "聚氯乙烯管可用于输送生活饮用水"
        ],
        answer: [0, 1, 2, 3],
        explanation: "<strong>正确答案：A、B、C、D</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>聚乙烯塑料管（PE管）<strong>无毒</strong>，可用于输送生活用水。<br><strong>B正确：</strong>硬聚氯乙烯排水管及管件用于<strong>建筑工程排水</strong>，也可用于<strong>工业排水系统</strong>。<br><strong>C正确：</strong>ABS工程塑料管<strong>耐腐蚀、耐温、耐冲击</strong>（「三耐「），使用温度-20℃~70℃。<br><strong>D正确：</strong>PP管按压力分为Ⅰ、Ⅱ、Ⅲ型，常温工作压力分别为<strong>0.4、0.6、0.8MPa</strong>。<br><strong>E错误：</strong>聚氯乙烯管（PVC-U）用于<strong>建筑排水</strong>，不用于输送生活饮用水。「无毒输送生活用水「是<strong>PE管</strong>的专属考点。<br><br><strong>【考点归纳】</strong>塑料水管四兄弟：PE（无毒生活水）、PVC-U（建筑排水）、PP（流体输送分三型）、ABS（三耐工程管）。<br><strong>【易混淆点】</strong>E选项把PE管的「无毒生活用水「张冠李戴到PVC管上，是典型陷阱。"
      },

      // ========== 三、电工线材 ==========
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "电线类型及应用",
        difficulty: "中",
        question: '机电工程现场中，电焊机至焊钳的连线宜选用（　）。',
        options: [
          "BV型电线",
          "BX型电线",
          "RV型电线",
          "BLV型电线"
        ],
        answer: 2,
        explanation: "<strong>正确答案：C</strong><br><br><strong>【解析】</strong><br><strong>C正确：</strong>RV型为铜芯软线，主要采用在需<strong>柔性连接的可动部位</strong>。机电工程现场中<strong>电焊机至焊钳的连线多采用RV型</strong>聚氯乙烯绝缘平形铜芯软线，因为电焊位置不固定、多移动，需要柔性连接。<br><br><strong>A、B干扰：</strong>BV型（聚氯乙烯绝缘铜芯线）、BX型（橡皮绝缘铜芯线）广泛用于机电安装工程和家庭/办公室照明的<strong>固定敷设</strong>，不适合频繁移动。<br><br><strong>D干扰：</strong>BLV型为铝芯电线，重量轻，通常用于<strong>架空线路尤其是长途输电线路</strong>。<br><br><strong>【考点归纳】</strong>电线选型口诀：BV/BX→固定敷设（机电安装、照明）；BLX/BLV→架空/长途输电（铝芯轻）；RV→柔性移动（电焊机至焊钳）。<br><strong>【记忆口诀】</strong>B硬固定、R软移动、BL铝架空；电焊焊钳用RV。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "电缆类型及应用",
        difficulty: "中",
        question: '某高层建筑电缆竖井内需要敷设电力电缆，要求能承受机械外力和相当大的拉力，且适用于潮湿场所。应选择的电缆型号是（　）。',
        options: [
          "VLV型",
          "VV22型",
          "VV32型",
          "KVV型"
        ],
        answer: 2,
        explanation: "<strong>正确答案：C</strong><br><br><strong>【解析】</strong><br><strong>C正确：</strong>VLV32、VV32型电缆（钢丝铠装）能承受机械外力作用，且可承受<strong>相当大的拉力</strong>，可敷设在<strong>竖井内、高层建筑的电缆竖井内</strong>，且适用于<strong>潮湿场所</strong>。数字「32「中「3「表示细圆钢丝铠装（承受大拉力），「2「表示聚氯乙烯外护套。<br><br><strong>A干扰：</strong>VLV、VV型电缆<strong>不能承受机械外力</strong>，适用于室内、隧道内及管道内敷设。<br><br><strong>B干扰：</strong>VLV22、VV22型电缆（钢带铠装）能承受<strong>机械外力</strong>但不能承受<strong>大的拉力</strong>，可敷设在地下。<br><br><strong>D干扰：</strong>KVV型为<strong>控制电缆</strong>，适用于室内各种敷设方式的控制电路中，不是电力电缆。<br><br><strong>【考点归纳】</strong>电缆型号后缀含义：22=钢带铠装（受外力、不受大拉力、可埋地）；32=钢丝铠装（受外力+受大拉力、可竖井敷设）；无后缀=不受机械外力（室内/隧道/管道）。<br><strong>【记忆口诀】</strong>22钢带埋地下，32钢丝竖井拉；无字只能室内放，KVV专管控制路。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "耐火电缆",
        difficulty: "中",
        question: '关于耐火电缆的说法，正确的是（　）。',
        options: [
          "耐火电缆是指在火焰燃烧情况下能保持一定时间安全运行的电缆",
          "A类耐火电缆在750~800℃火焰中可持续供电90min",
          "B类耐火电缆在950~1000℃火焰中可持续供电90min",
          "耐火电缆可以当作耐高温电缆使用"
        ],
        answer: 0,
        explanation: "<strong>正确答案：A</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>耐火电缆是指在<strong>火焰燃烧情况下能保持一定时间安全运行</strong>的电缆。<br><br><strong>B错误：</strong><strong>A类</strong>耐火电缆在<strong>950~1000℃</strong>时可持续供电90min（不是750~800℃）。<br><br><strong>C错误：</strong><strong>B类</strong>耐火电缆在<strong>750~800℃</strong>时可持续供电90min（不是950~1000℃）。B和C正好把温度范围<strong>互换</strong>了。<br><br><strong>D错误：</strong>耐火电缆<strong>不能</strong>当作耐高温电缆使用。耐火电缆强调的是在火灾时保持供电，耐高温电缆强调的是长期在高温环境中工作。<br><br><strong>【考点归纳】</strong>阻燃电缆vs耐火电缆：阻燃=残焰在限定时间内自行熄灭（A/B/C三类）；耐火=火焰中保持安全运行（A类950~1000℃/90min，B类750~800℃/90min）。耐火电缆多用作应急电源供电回路，为保证容量需放大一档截面。<br><strong>【记忆口诀】</strong>记78910，首选A类耐火：A类950~1000℃，B类750~800℃，都是90min。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "母线槽",
        difficulty: "高",
        question: '高层建筑的垂直输配电应选用（　），以防止烟囱效应。',
        options: [
          "空气型母线槽",
          "紧密型母线槽",
          "高强度母线槽",
          "耐火型母线槽"
        ],
        answer: 1,
        explanation: "<strong>正确答案：B</strong><br><br><strong>【解析】</strong><br><strong>B正确：</strong><strong>紧密型母线槽</strong>结构紧凑，外壳密封性好，能有效<strong>防止烟囱效应</strong>，因此高层建筑的垂直输配电应选用紧密型母线槽。<br><br><strong>A干扰：</strong>空气型母线槽内部有空气绝缘层，不能有效防止烟囱效应。<br><br><strong>C干扰：</strong>高强度母线槽机械强度增加、防潮散热功能提高、过载能力增强、磁振荡噪声减小，但不是防烟囱效应的首选。<br><br><strong>D干扰：</strong>耐火型母线槽用于应急电源回路，耐火时间有60min、90min、120min、180min等规格（30的倍数）。<br><br><strong>【考点归纳】</strong>母线槽四种类型：紧密型（防烟囱效应→垂直输配电）、高强度型（机械强+防潮散热+过载+低噪）、耐火型（应急电源，耐火时间30的倍数）、空气型（一般水平敷设）。<br><strong>【记忆口诀】</strong>紧密防烟竖向走，高强度型四提升，耐火应急记30倍数，空气型管水平铺。"
      },
      {
        type: "single",
        typeLabel: "单选题",
        knowledgePoint: "绝缘材料",
        difficulty: "中",
        question: '下列气体中，不属于气体绝缘材料的是（　）。',
        options: [
          "空气",
          "氮气",
          "六氟化硫（SF₆）",
          "变压器油"
        ],
        answer: 3,
        explanation: "<strong>正确答案：D</strong><br><br><strong>【解析】</strong><br><strong>D正确：</strong><strong>变压器油</strong>属于<strong>液体绝缘材料</strong>，不是气体绝缘材料。液体绝缘材料的作用：绝缘+散热。种类包括变压器油、断路器油、电容器油、电缆油。<br><br><strong>A、B、C错误：</strong>空气、氮气、二氧化硫、六氟化硫（SF₆）均属于<strong>气体绝缘材料</strong>。气体绝缘材料的作用：绝缘、灭弧、冷却、保护。其中SF₆无色无味无毒、不燃不爆、化学性质稳定。<br><br><strong>【考点归纳】</strong>绝缘材料分三类：气体（空气/氮气/SO₂/SF₆，作用=绝缘+灭弧+冷却+保护）、液体（变压器油/断路器油/电容器油/电缆油，作用=绝缘+散热）、固体（云母/石棉/陶瓷等）。<br><strong>【记忆口诀】</strong>气体绝缘四兄弟：空气氮气SO₂加SF₆；液体绝缘是油类：变压器油断路器油电容器油电缆油。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "电线电缆综合",
        difficulty: "高",
        question: '关于机电工程常用电线电缆的型号及应用，下列说法正确的有（　）。',
        options: [
          "BV型电线为聚氯乙烯绝缘铜芯线，广泛采用在机电安装工程中",
          "BLX型、BLV型为铝芯电线，重量轻，通常用于架空线路尤其是长途输电线路",
          "RV型为铜芯软线，主要用于需柔性连接的可动部位",
          "VLV22、VV22型电缆能承受机械外力但不能承受大的拉力，可敷设在地下",
          "KVV型为控制电缆，适用于室内各种敷设方式的控制电路中"
        ],
        answer: [0, 1, 2, 3, 4],
        explanation: "<strong>正确答案：A、B、C、D、E（全选）</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>BV型=聚氯乙烯绝缘铜芯线，BX型=橡皮绝缘铜芯线，均为铜芯电线，广泛用于机电安装工程。<br><strong>B正确：</strong>BLX型（铝芯橡皮绝缘）、BLV型（铝芯聚氯乙烯绝缘）为铝芯电线，重量轻，用于架空线路尤其是长途输电线路。<br><strong>C正确：</strong>RV型为铜芯软线（多股绞合），用于需柔性连接的可动部位（如电焊机至焊钳）。<br><strong>D正确：</strong>VLV22、VV22为钢带铠装电缆，能承受机械外力但不能承受大的拉力，可敷设在地下。<br><strong>E正确：</strong>KVV型为聚氯乙烯绝缘聚氯乙烯护套控制电缆，适用于室内各种敷设方式的控制电路中。<br><br><strong>【考点归纳】</strong>电线型号字母含义：B=固定敷设/扁型；V=聚氯乙烯绝缘或护套；X=橡胶绝缘；Y=聚乙烯绝缘；R=软电线（多股绞合）；L=铝芯；T=铜芯（可省略）；22=钢带铠装PVC护套；32=钢丝铠装PVC护套；K=控制电缆。<br><strong>【记忆口诀】</strong>B固定V聚氯X橡胶Y聚乙烯R软线L铝芯；22钢带32钢丝，K字打头控制缆。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "氧化镁电缆",
        difficulty: "高",
        question: '关于氧化镁电缆的特点，下列说法正确的有（　）。',
        options: [
          "氧化镁电缆具有防水、防火、防爆的优点",
          "氧化镁电缆载流量大、耐高温，长期允许工作温度可达250℃",
          "氧化镁电缆机械强度高、寿命长、接地性能好",
          "氧化镁电缆价格便宜、工艺简单、施工方便",
          "截面25mm²以上的多芯氧化镁电缆均由单芯电缆组成"
        ],
        answer: [0, 1, 2, 4],
        explanation: "<strong>正确答案：A、B、C、E</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>氧化镁电缆优点：<strong>防水、防火、防爆</strong>。<br><strong>B正确：</strong>氧化镁电缆<strong>载流量大、耐高温</strong>，长期允许工作温度<strong>250℃</strong>。<br><strong>C正确：</strong>氧化镁电缆<strong>机械强度高、寿命长、接地性能好</strong>。<br><strong>D错误：</strong>氧化镁电缆的缺点是<strong>价格昂贵、工艺复杂、施工困难（硬）</strong>，不是「价格便宜、工艺简单、施工方便「。<br><strong>E正确：</strong>截面<strong>25mm²以上</strong>的多芯氧化镁电缆<strong>均由单芯电缆组成</strong>。<br><br><strong>【考点归纳】</strong>氧化镁电缆：优点（防水防火防爆+载流大耐高温250℃+强度高寿命长接地好）；缺点（贵+工艺复杂+施工困难硬+25mm²以上多芯均为单芯）。<br><strong>【记忆口诀】</strong>250斤的镁女：除了贵（价格昂贵），全是优点（防水防火防爆、载流大耐高温、强度高寿命长接地好）；25mm²以上多芯=单芯。"
      },
      {
        type: "multi",
        typeLabel: "多选题",
        knowledgePoint: "章节综合",
        difficulty: "高",
        question: '（本章综合题）下列关于机电工程常用材料的说法中，正确的有（　）。',
        options: [
          "碳素结构钢按屈服强度分为Q195、Q215、Q235、Q275四个等级",
          "酚醛复合风管不适用于高压及洁净空调系统",
          "聚乙烯塑料管无毒，可用于输送生活用水",
          "VV32型电缆可敷设在高层建筑电缆竖井内，且适用于潮湿场所",
          "黄铜是以镍为主要合金元素的铜合金"
        ],
        answer: [0, 1, 2, 3],
        explanation: "<strong>正确答案：A、B、C、D</strong><br><br><strong>【解析】</strong><br><strong>A正确：</strong>碳素结构钢按屈服强度分为<strong>Q195、Q215、Q235、Q275</strong>四个等级。<br><strong>B正确：</strong>酚醛复合风管不适用于<strong>高压及洁净空调、酸碱性环境和防排烟系统</strong>。<br><strong>C正确：</strong>聚乙烯塑料管<strong>无毒</strong>，可用于输送生活用水。<br><strong>D正确：</strong>VV32型（钢丝铠装）可承受机械外力和相当大的拉力，可敷设在<strong>竖井内、高层建筑电缆竖井内</strong>，且适用于<strong>潮湿场所</strong>。<br><strong>E错误：</strong>黄铜是以<strong>锌</strong>为主要合金元素的铜合金。以镍为主要合金元素的是<strong>白铜</strong>。<br><br><strong>【考点归纳】</strong>本题综合考查本章三大板块核心考点：金属材料（碳素结构钢分级）、非金属材料（酚醛风管适用范围）、塑料水管（PE管无毒）、电工线材（VV32电缆竖井敷设）、有色金属（铜合金分类）。<br><strong>【易混淆点】</strong>E选项是本章易混淆点之一：黄铜→锌，白铜→镍，青铜→锡（为主）。"
      }
    ]
  }
};
