// Dynamic node config for Smart Education canvas
export const nodeDefinitions = [
  {
    id: 'node-ai-mentor',
    title: 'AI Mentor',
    category: 'AI Learning',
    color: '#53d6ff',
    features: ['Adaptive Learning', 'Style Detection', 'Dynamic Difficulty', 'Interactive QA', 'Progress Dashboard', 'LMS Integration', 'Gamified Motivation'],
    techStack: ['React.js', 'NLP', 'FastAPI', 'Firebase', 'Socket.io'],
    expertCommentary: 'Feasibility: High in cloud, scalable, leverages existing NLP and learning platforms.',
    inputs: ['Student Data', 'Learning Mode', 'Performance Metrics'],
    outputs: ['Suggest Topics', 'Progress', 'Gamified Badges']
  },
  {
    id: 'node-skillgraph',
    title: 'SkillGraph Navigator',
    category: 'Analytics',
    color: '#3c7fd6',
    features: ['Live Skill Graph', 'Job Data Scraping', 'AI Skill Extraction', 'Skill Co-Occurrence Mapping', 'Career Path Recommendation', 'Interactive Visualization'],
    techStack: ['React.js', 'D3.js', 'FastAPI', 'MongoDB', 'Socket.io'],
    expertCommentary: 'High impact for career guidance. Real-time data, graph DBs, skill matching real job market needs.',
    inputs: ['Job Listings', 'Skill Data', 'User Resume'],
    outputs: ['Skill Graph', 'Recommended Paths', 'Skill Clusters']
  },
  {
    id: 'node-mindmapify',
    title: 'MindMapify',
    category: 'Visualization',
    color: '#9f53ff',
    features: ['Auto Summarization', 'Clickable MindMap', 'Semantic Linking', 'Custom Visualization', 'Export Integration', 'Collab Editing'],
    techStack: ['React.js', 'NLP', 'D3.js', 'Socket.io'],
    expertCommentary: 'Great for concept exploration. NLP-based summarization + interactive UX opens knowledge mapping to all.',
    inputs: ['Docs/PDFs', 'Uploaded Notes'],
    outputs: ['Mind Map', 'PDF/Obsidian Export']
  },
  {
    id: 'node-spaced-rep',
    title: 'Spaced Repetition w/ Social Challenges',
    category: 'Gamification',
    color: '#ffce53',
    features: ['Adaptive Repetition', 'Social Challenge Groups', 'Gamified Progress', 'AI Question Gen', 'Peer Dashboard'],
    techStack: ['React.js', 'NLP', 'Firebase', 'Socket.io'],
    expertCommentary: 'Ideal for memory and engagement. Proven spaced repetition + competitive social layer = high user retention.',
    inputs: ['User Recall', 'Challenge Groups'],
    outputs: ['XP/Badges', 'Leaderboards', 'Flashcard Sets']
  },
  {
    id: 'node-skill-gap',
    title: 'Skill Gap Visualizer',
    category: 'Analytics',
    color: '#ff5353',
    features: ['Skill Matrix Visualization', 'Automated Skill Detection', 'Skill-Gap Analysis', 'Recommendation Engine', 'Progress Tracking', 'Institutional Insights'],
    techStack: ['React.js', 'NLP', 'MongoDB', 'Socket.io', 'FastAPI'],
    expertCommentary: 'Excellent for individual and institutional planning. Automated gap detection + recommender boosts learning efficiency.',
    inputs: ['Resume', 'Skill Profiles', 'Target Roles'],
    outputs: ['Skill Matrix', 'Gap Reports', 'Recommendations']
  }
];
