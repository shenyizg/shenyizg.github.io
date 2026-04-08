// ============================================
//  data.js — Edit this file to update your site
//  Just change the values below and refresh your browser!
// ============================================

const siteData = {

  // --- Profile ---
  name: "Shenyi Zhang",
  title: "Ph.D. Candidate",
  affiliation: "School of Cyber Science and Engineering, Wuhan University",
  bio: `I am a Ph.D. student at School of Cyber Science and Engineering, Wuhan University, where I am conducting research in AI Security, advised by Prof. Qian Wang of NIS&P Lab.
<br> My work focuses on <strong>adversarial robustness of AI systems</strong>, especially <strong>safety alignment</strong> and <strong>privacy in large language models</strong>.`,
  photo: "images/avatar.png",

  // --- Links ---
  email: "shenyizhang@whu.edu.cn",
  secondaryEmail: "syzhang.whu@gmail.com",
  scholarUrl: "https://scholar.google.com/citations?user=xj4Mxp8AAAAJ",
  githubUrl: "https://github.com/shenyizg",
  twitterUrl: "",
  cvPdfUrl: "",

  // --- Education (shown as 2nd section) ---
  education: [
    {
      date: "2022 — 2025",
      degree: "Ph.D. in Cyberspace Security",
      school: "Wuhan University"
    },
    {
      date: "2020 — 2022",
      degree: "M.S. in Electronic Information",
      school: "Wuhan University"
    },
    {
      date: "2015 — 2019",
      degree: "B.E. in Communication Engineering",
      school: "Shandong University"
    }
  ],

  // --- Publications ---
  // Top-4 security conferences: CCS, USENIX Security, S&P, NDSS
  // Their abbreviations will be auto-bolded in venue text.
  // publicationsNote: "# Corresponding author",
  publications: [
    {
      year: 2026,
      papers: [
        {
          title: "Divide and Conquer: Policy-Aware Jailbreak Defense for Large Language Models",
          authors: "Yuchen Zhai, Shengnan Guo, Shenyi Zhang, Lingchen Zhao",
          venue: "International Conference on Knowledge Science, Engineering and Management (KSEM), 2026",
          links: {}
        },
        {
          title: "Boosting Adversarial Transferability with Low-Cost Optimization via Maximin Expected Flatness",
          authors: "Chunlin Qiu, Ang Li, Yiheng Duan, Shenyi Zhang, Yuanjie Zhang, Lingchen Zhao, Qian Wang",
          venue: "IEEE Transactions on Information Forensics and Security (TIFS), 2026",
          links: { paper: "https://ieeexplore.ieee.org/abstract/document/11364188", code: "https://github.com/SignedQiu/MEFAttack" }
        }
      ]
    },
    {
      year: 2025,
      papers: [
        {
          title: "IntentBreaker: Intent-Adaptive Jailbreak Attack on Large Language Models",
          authors: "Shengnan Guo, Yuchen Zhai, Shenyi Zhang, Lingchen Zhao, Zhangyi Wang",
          venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD), 2025",
          links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-06078-5_14" }
        },
        {
          title: "Selective Masking Adversarial Attack on Automatic Speech Recognition Systems",
          authors: "Zheng Fang, Shenyi Zhang, Tao Wang, Bowen Li, Lingchen Zhao, Zhangyi Wang",
          venue: "IEEE International Conference on Multimedia and Expo (ICME), 2025",
          links: { paper: "https://ieeexplore.ieee.org/document/11210179", preprint: "https://arxiv.org/abs/2504.04394" }
        },
        {
          title: "JBShield: Defending Large Language Models from Jailbreak Attacks through Activated Concept Analysis and Manipulation",
          authors: "Shenyi Zhang, Yuchen Zhai, Keyan Guo, Hongxin Hu, Shengnan Guo, Zheng Fang, Lingchen Zhao, Chao Shen, Cong Wang, Qian Wang",
          venue: "USENIX Security Symposium (USENIX Security), 2025",
          links: { paper: "https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-shenyi", preprint: "https://arxiv.org/abs/2502.07557", code: "https://github.com/NISPLab/JBShield", slides: "files/slide-jbshield.pdf" }
        }
      ]
    },
    {
      year: 2024,
      papers: [
        {
          title: "Zero-query Adversarial Attack on Black-box Automatic Speech Recognition Systems",
          authors: "Zheng Fang, Tao Wang, Lingchen Zhao, Shenyi Zhang, Bowen Li, Yunjie Ge, Qi Li, Chao Shen, Qian Wang",
          venue: "ACM Conference on Computer and Communications Security (CCS), 2024",
          links: { paper: "https://dl.acm.org/doi/abs/10.1145/3658644.3670309", preprint: "https://arxiv.org/abs/2406.19311" }
        },
        {
          title: "Hijacking Attacks against Neural Networks by Analyzing Training Data",
          authors: "Yunjie Ge, Qian Wang, Huayang Huang, Qi Li, Cong Wang, Chao Shen, Lingchen Zhao, Peipei Jiang, Zheng Fang, Shenyi Zhang",
          venue: "USENIX Security Symposium (USENIX Security), 2024",
          links: { paper: "https://www.usenix.org/conference/usenixsecurity24/presentation/ge-hijacking", preprint: "https://arxiv.org/abs/2401.09740", code: "https://github.com/NISPLab/CleanSheet/" }
        },
        {
          title: "Enhancing the Transferability of Adversarial Examples with Noise Injection Augmentation",
          authors: "Yiheng Duan, Yunjie Ge, Zixuan Wang, Jiayi Yu, Shenyi Zhang, Libing Wu",
          venue: "IEEE International Conference on Multimedia and Expo (ICME), 2024",
          links: { paper: "https://ieeexplore.ieee.org/document/10688210" }
        },
        {
          title: "Perception-driven Imperceptible Adversarial Attack against Decision-based Black-box Models",
          authors: "Shenyi Zhang, Baolin Zheng, Peipei Jiang, Lingchen Zhao, Chao Shen, Qian Wang",
          venue: "IEEE Transactions on Information Forensics and Security (TIFS), 2024",
          links: { paper: "https://ieeexplore.ieee.org/abstract/document/10415445", code: "https://github.com/syzhangcodes/ImperceptibleAttack" }
        }
      ]
    },
    {
      year: 2021,
      papers: [
        {
          title: "Black-box Adversarial Attacks on Commercial Speech Platforms with Minimal Information",
          authors: "Baolin Zheng, Peipei Jiang, Qian Wang, Qi Li, Chao Shen, Cong Wang, Yunjie Ge, Qingyang Teng, Shenyi Zhang",
          venue: "ACM Conference on Computer and Communications Security (CCS), 2021",
          links: { paper: "https://dl.acm.org/doi/abs/10.1145/3460120.3485383", preprint: "https://arxiv.org/abs/2110.09714" }
        }
      ]
    },
    {
      year: "Preprint",
      papers: [
        {
          title: "Amulet: Fast TEE-Shielded Inference for On-Device Model Protection",
          authors: "Zikai Mao, Lingchen Zhao, Lei Xu, Wentao Dong, Shenyi Zhang, Cong Wang, Qian Wang",
          venue: "arXiv, 2512.07495",
          links: { preprint: "https://arxiv.org/abs/2512.07495" }
        }
      ]
    }
  ],

  // --- Teaching ---
  teaching: [
    {
      term: "Spring 2023",
      course: "Data Structures and Algorithms",
      role: "Teaching Assistant — Wuhan University"
    },
    {
      term: "Spring 2023",
      course: "Data Structures Experiments",
      role: "Teaching Assistant — Wuhan University"
    },
    {
      term: "Fall 2018",
      course: "Automatic Control Theory",
      role: "Course Assistant — Shandong University"
    },
  ],

  // --- Services ---
  services: {
    "Program Committees": [
      "Artifact Evaluation Committee Member, USENIX Security Symposium (USENIX Security) 2026",
      "Program Committee Member, ACM Multimedia Conference (ACM MM) 2025, 2026"
    ],
    "Conference Reviewers": [
      "IEEE International Conference on Multimedia and Expo (ICME) 2024, 2025, 2026",
      "International Joint Conference on Neural Networks (IJCNN) 2025, 2026",
      "IEEE Conference on Advanced Video and Signal Based Surveillance (AVSS) 2025"
    ],
    "Journal Reviewers": [
      "IEEE Transactions on Information Forensics and Security (TIFS)",
      "IEEE Transactions on Dependable and Secure Computing (TDSC)",
      "IEEE Transactions on Multimedia (TMM)",
      "IEEE Transactions on Emerging Topics in Computing (TETC)",
      "IEEE/ACM Transactions on Networking (TON)",
      "ACM Transactions on Knowledge Discovery from Data (TKDD)",
      "ACM Transactions on Cyber-Physical Systems (TCPS)",
      "ACM Transactions on Internet Technology (TOIT)",
      "Computer Vision and Image Understanding (CVIU)",
      "Information Sciences",
      "Knowledge-Based Systems (KBS)",
      "Neurocomputing"
    ]
  },

  // --- Talks ---
  talks: [
    {
      title: "ACM SIGSAC China Postgraduate Academic Forum on Cyberspace Security",
      detail: "2025",
      link: "https://www.bilibili.com/video/BV1pEn7zdExm"
    },
    {
      title: "JBShield: Defending Large Language Models from Jailbreak Attacks through Activated Concept Analysis and Manipulation",
      detail: "USENIX Security 2025",
      link: "files/slide-jbshield.pdf"
    }
  ],

  // --- Footer ---
  footerText: "© 2026 Shenyi Zhang. Built with care."
};
