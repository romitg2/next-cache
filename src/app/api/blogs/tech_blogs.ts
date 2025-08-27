export type Blog = {
  d: number;
  tags: string[];
  title: string;
  content: string;
};

const blogs = [
  {
    d: 1,
    tags: ["react", "tech", "guide"],
    title: "Introduction to React",
    content:
      "This blog covers the fundamentals of React, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 2,
    tags: ["node.js", "tech", "guide"],
    title: "Introduction to Node.js",
    content:
      "This blog covers the fundamentals of Node.js, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 3,
    tags: ["express", "tech", "guide"],
    title: "Introduction to Express",
    content:
      "This blog covers the fundamentals of Express, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 4,
    tags: ["sql", "tech", "guide"],
    title: "Introduction to SQL",
    content:
      "This blog covers the fundamentals of SQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 5,
    tags: ["mongodb", "tech", "guide"],
    title: "Introduction to MongoDB",
    content:
      "This blog covers the fundamentals of MongoDB, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 6,
    tags: ["docker", "tech", "guide"],
    title: "Introduction to Docker",
    content:
      "This blog covers the fundamentals of Docker, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 7,
    tags: ["kubernetes", "tech", "guide"],
    title: "Introduction to Kubernetes",
    content:
      "This blog covers the fundamentals of Kubernetes, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 8,
    tags: ["typescript", "tech", "guide"],
    title: "Introduction to TypeScript",
    content:
      "This blog covers the fundamentals of TypeScript, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 9,
    tags: ["git", "tech", "guide"],
    title: "Introduction to Git",
    content:
      "This blog covers the fundamentals of Git, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 10,
    tags: ["graphql", "tech", "guide"],
    title: "Introduction to GraphQL",
    content:
      "This blog covers the fundamentals of GraphQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 11,
    tags: ["next.js", "tech", "guide"],
    title: "Introduction to Next.js",
    content:
      "This blog covers the fundamentals of Next.js, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 12,
    tags: ["ai", "tech", "guide"],
    title: "Introduction to AI",
    content:
      "This blog covers the fundamentals of AI, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 13,
    tags: ["machine learning", "tech", "guide"],
    title: "Introduction to Machine Learning",
    content:
      "This blog covers the fundamentals of Machine Learning, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 14,
    tags: ["deep learning", "tech", "guide"],
    title: "Introduction to Deep Learning",
    content:
      "This blog covers the fundamentals of Deep Learning, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 15,
    tags: ["python", "tech", "guide"],
    title: "Introduction to Python",
    content:
      "This blog covers the fundamentals of Python, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 16,
    tags: ["django", "tech", "guide"],
    title: "Introduction to Django",
    content:
      "This blog covers the fundamentals of Django, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 17,
    tags: ["flask", "tech", "guide"],
    title: "Introduction to Flask",
    content:
      "This blog covers the fundamentals of Flask, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 18,
    tags: ["rust", "tech", "guide"],
    title: "Introduction to Rust",
    content:
      "This blog covers the fundamentals of Rust, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 19,
    tags: ["go", "tech", "guide"],
    title: "Introduction to Go",
    content:
      "This blog covers the fundamentals of Go, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 20,
    tags: ["c++", "tech", "guide"],
    title: "Introduction to C++",
    content:
      "This blog covers the fundamentals of C++, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 21,
    tags: ["java", "tech", "guide"],
    title: "Introduction to Java",
    content:
      "This blog covers the fundamentals of Java, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 22,
    tags: ["spring boot", "tech", "guide"],
    title: "Introduction to Spring Boot",
    content:
      "This blog covers the fundamentals of Spring Boot, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 23,
    tags: ["apis", "tech", "guide"],
    title: "Introduction to APIs",
    content:
      "This blog covers the fundamentals of APIs, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 24,
    tags: ["rest", "tech", "guide"],
    title: "Introduction to REST",
    content:
      "This blog covers the fundamentals of REST, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 25,
    tags: ["grpc", "tech", "guide"],
    title: "Introduction to gRPC",
    content:
      "This blog covers the fundamentals of gRPC, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 26,
    tags: ["web security", "tech", "guide"],
    title: "Introduction to Web Security",
    content:
      "This blog covers the fundamentals of Web Security, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 27,
    tags: ["authentication", "tech", "guide"],
    title: "Introduction to Authentication",
    content:
      "This blog covers the fundamentals of Authentication, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 28,
    tags: ["oauth", "tech", "guide"],
    title: "Introduction to OAuth",
    content:
      "This blog covers the fundamentals of OAuth, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 29,
    tags: ["blockchain", "tech", "guide"],
    title: "Introduction to Blockchain",
    content:
      "This blog covers the fundamentals of Blockchain, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 30,
    tags: ["solidity", "tech", "guide"],
    title: "Introduction to Solidity",
    content:
      "This blog covers the fundamentals of Solidity, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 31,
    tags: ["smart contracts", "tech", "guide"],
    title: "Introduction to Smart Contracts",
    content:
      "This blog covers the fundamentals of Smart Contracts, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 32,
    tags: ["web3", "tech", "guide"],
    title: "Introduction to Web3",
    content:
      "This blog covers the fundamentals of Web3, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 33,
    tags: ["cloud computing", "tech", "guide"],
    title: "Introduction to Cloud Computing",
    content:
      "This blog covers the fundamentals of Cloud Computing, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 34,
    tags: ["aws", "tech", "guide"],
    title: "Introduction to AWS",
    content:
      "This blog covers the fundamentals of AWS, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 35,
    tags: ["azure", "tech", "guide"],
    title: "Introduction to Azure",
    content:
      "This blog covers the fundamentals of Azure, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 36,
    tags: ["gcp", "tech", "guide"],
    title: "Introduction to GCP",
    content:
      "This blog covers the fundamentals of GCP, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 37,
    tags: ["devops", "tech", "guide"],
    title: "Introduction to DevOps",
    content:
      "This blog covers the fundamentals of DevOps, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 38,
    tags: ["ci/cd", "tech", "guide"],
    title: "Introduction to CI/CD",
    content:
      "This blog covers the fundamentals of CI/CD, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 39,
    tags: ["testing", "tech", "guide"],
    title: "Introduction to Testing",
    content:
      "This blog covers the fundamentals of Testing, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 40,
    tags: ["jest", "tech", "guide"],
    title: "Introduction to Jest",
    content:
      "This blog covers the fundamentals of Jest, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 41,
    tags: ["mocha", "tech", "guide"],
    title: "Introduction to Mocha",
    content:
      "This blog covers the fundamentals of Mocha, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 42,
    tags: ["playwright", "tech", "guide"],
    title: "Introduction to Playwright",
    content:
      "This blog covers the fundamentals of Playwright, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 43,
    tags: ["frontend", "tech", "guide"],
    title: "Introduction to Frontend",
    content:
      "This blog covers the fundamentals of Frontend, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 44,
    tags: ["backend", "tech", "guide"],
    title: "Introduction to Backend",
    content:
      "This blog covers the fundamentals of Backend, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 45,
    tags: ["microservices", "tech", "guide"],
    title: "Introduction to Microservices",
    content:
      "This blog covers the fundamentals of Microservices, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 46,
    tags: ["architecture", "tech", "guide"],
    title: "Introduction to Architecture",
    content:
      "This blog covers the fundamentals of Architecture, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 47,
    tags: ["design patterns", "tech", "guide"],
    title: "Introduction to Design Patterns",
    content:
      "This blog covers the fundamentals of Design Patterns, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 48,
    tags: ["agile", "tech", "guide"],
    title: "Introduction to Agile",
    content:
      "This blog covers the fundamentals of Agile, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 49,
    tags: ["scrum", "tech", "guide"],
    title: "Introduction to Scrum",
    content:
      "This blog covers the fundamentals of Scrum, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 50,
    tags: ["system design", "tech", "guide"],
    title: "Introduction to System Design",
    content:
      "This blog covers the fundamentals of System Design, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 51,
    tags: ["databases", "tech", "guide"],
    title: "Introduction to Databases",
    content:
      "This blog covers the fundamentals of Databases, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 52,
    tags: ["redis", "tech", "guide"],
    title: "Introduction to Redis",
    content:
      "This blog covers the fundamentals of Redis, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 53,
    tags: ["postgresql", "tech", "guide"],
    title: "Introduction to PostgreSQL",
    content:
      "This blog covers the fundamentals of PostgreSQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 54,
    tags: ["mysql", "tech", "guide"],
    title: "Introduction to MySQL",
    content:
      "This blog covers the fundamentals of MySQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 55,
    tags: ["nosql", "tech", "guide"],
    title: "Introduction to NoSQL",
    content:
      "This blog covers the fundamentals of NoSQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 56,
    tags: ["data structures", "tech", "guide"],
    title: "Introduction to Data Structures",
    content:
      "This blog covers the fundamentals of Data Structures, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 57,
    tags: ["algorithms", "tech", "guide"],
    title: "Introduction to Algorithms",
    content:
      "This blog covers the fundamentals of Algorithms, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 58,
    tags: ["performance optimization", "tech", "guide"],
    title: "Introduction to Performance Optimization",
    content:
      "This blog covers the fundamentals of Performance Optimization, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 59,
    tags: ["networking", "tech", "guide"],
    title: "Introduction to Networking",
    content:
      "This blog covers the fundamentals of Networking, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 60,
    tags: ["operating systems", "tech", "guide"],
    title: "Introduction to Operating Systems",
    content:
      "This blog covers the fundamentals of Operating Systems, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 61,
    tags: ["linux", "tech", "guide"],
    title: "Introduction to Linux",
    content:
      "This blog covers the fundamentals of Linux, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 62,
    tags: ["shell scripting", "tech", "guide"],
    title: "Introduction to Shell Scripting",
    content:
      "This blog covers the fundamentals of Shell Scripting, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 63,
    tags: ["bash", "tech", "guide"],
    title: "Introduction to Bash",
    content:
      "This blog covers the fundamentals of Bash, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 64,
    tags: ["graph databases", "tech", "guide"],
    title: "Introduction to Graph Databases",
    content:
      "This blog covers the fundamentals of Graph Databases, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 65,
    tags: ["neo4j", "tech", "guide"],
    title: "Introduction to Neo4j",
    content:
      "This blog covers the fundamentals of Neo4j, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 66,
    tags: ["big data", "tech", "guide"],
    title: "Introduction to Big Data",
    content:
      "This blog covers the fundamentals of Big Data, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 67,
    tags: ["hadoop", "tech", "guide"],
    title: "Introduction to Hadoop",
    content:
      "This blog covers the fundamentals of Hadoop, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 68,
    tags: ["spark", "tech", "guide"],
    title: "Introduction to Spark",
    content:
      "This blog covers the fundamentals of Spark, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 69,
    tags: ["data engineering", "tech", "guide"],
    title: "Introduction to Data Engineering",
    content:
      "This blog covers the fundamentals of Data Engineering, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 70,
    tags: ["etl", "tech", "guide"],
    title: "Introduction to ETL",
    content:
      "This blog covers the fundamentals of ETL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 71,
    tags: ["data science", "tech", "guide"],
    title: "Introduction to Data Science",
    content:
      "This blog covers the fundamentals of Data Science, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 72,
    tags: ["nlp", "tech", "guide"],
    title: "Introduction to NLP",
    content:
      "This blog covers the fundamentals of NLP, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 73,
    tags: ["computer vision", "tech", "guide"],
    title: "Introduction to Computer Vision",
    content:
      "This blog covers the fundamentals of Computer Vision, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 74,
    tags: ["ar", "tech", "guide"],
    title: "Introduction to AR",
    content:
      "This blog covers the fundamentals of AR, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 75,
    tags: ["vr", "tech", "guide"],
    title: "Introduction to VR",
    content:
      "This blog covers the fundamentals of VR, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 76,
    tags: ["metaverse", "tech", "guide"],
    title: "Introduction to Metaverse",
    content:
      "This blog covers the fundamentals of Metaverse, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 77,
    tags: ["three.js", "tech", "guide"],
    title: "Introduction to Three.js",
    content:
      "This blog covers the fundamentals of Three.js, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 78,
    tags: ["webgl", "tech", "guide"],
    title: "Introduction to WebGL",
    content:
      "This blog covers the fundamentals of WebGL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 79,
    tags: ["react three fiber", "tech", "guide"],
    title: "Introduction to React Three Fiber",
    content:
      "This blog covers the fundamentals of React Three Fiber, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 80,
    tags: ["tailwindcss", "tech", "guide"],
    title: "Introduction to TailwindCSS",
    content:
      "This blog covers the fundamentals of TailwindCSS, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 81,
    tags: ["css", "tech", "guide"],
    title: "Introduction to CSS",
    content:
      "This blog covers the fundamentals of CSS, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 82,
    tags: ["html", "tech", "guide"],
    title: "Introduction to HTML",
    content:
      "This blog covers the fundamentals of HTML, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 83,
    tags: ["accessibility", "tech", "guide"],
    title: "Introduction to Accessibility",
    content:
      "This blog covers the fundamentals of Accessibility, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 84,
    tags: ["web performance", "tech", "guide"],
    title: "Introduction to Web Performance",
    content:
      "This blog covers the fundamentals of Web Performance, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 85,
    tags: ["pwa", "tech", "guide"],
    title: "Introduction to PWA",
    content:
      "This blog covers the fundamentals of PWA, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 86,
    tags: ["service workers", "tech", "guide"],
    title: "Introduction to Service Workers",
    content:
      "This blog covers the fundamentals of Service Workers, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 87,
    tags: ["caching", "tech", "guide"],
    title: "Introduction to Caching",
    content:
      "This blog covers the fundamentals of Caching, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 88,
    tags: ["event loop", "tech", "guide"],
    title: "Introduction to Event Loop",
    content:
      "This blog covers the fundamentals of Event Loop, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 89,
    tags: ["async programming", "tech", "guide"],
    title: "Introduction to Async Programming",
    content:
      "This blog covers the fundamentals of Async Programming, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 90,
    tags: ["concurrency", "tech", "guide"],
    title: "Introduction to Concurrency",
    content:
      "This blog covers the fundamentals of Concurrency, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 91,
    tags: ["multithreading", "tech", "guide"],
    title: "Introduction to Multithreading",
    content:
      "This blog covers the fundamentals of Multithreading, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 92,
    tags: ["containers", "tech", "guide"],
    title: "Introduction to Containers",
    content:
      "This blog covers the fundamentals of Containers, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 93,
    tags: ["serverless", "tech", "guide"],
    title: "Introduction to Serverless",
    content:
      "This blog covers the fundamentals of Serverless, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 94,
    tags: ["edge computing", "tech", "guide"],
    title: "Introduction to Edge Computing",
    content:
      "This blog covers the fundamentals of Edge Computing, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 95,
    tags: ["javascript", "tech", "guide"],
    title: "Introduction to JavaScript",
    content:
      "This blog covers the fundamentals of JavaScript, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 96,
    tags: ["react", "tech", "guide"],
    title: "Introduction to React",
    content:
      "This blog covers the fundamentals of React, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 97,
    tags: ["node.js", "tech", "guide"],
    title: "Introduction to Node.js",
    content:
      "This blog covers the fundamentals of Node.js, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 98,
    tags: ["express", "tech", "guide"],
    title: "Introduction to Express",
    content:
      "This blog covers the fundamentals of Express, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 99,
    tags: ["sql", "tech", "guide"],
    title: "Introduction to SQL",
    content:
      "This blog covers the fundamentals of SQL, its use cases, and how developers can apply it in real-world projects.",
  },
  {
    d: 100,
    tags: ["mongodb", "tech", "guide"],
    title: "Introduction to MongoDB",
    content:
      "This blog covers the fundamentals of MongoDB, its use cases, and how developers can apply it in real-world projects.",
  },
];

const alreadyIncluded = new Set();
const availableTags: string[] = [];

for (const blog of blogs) {
  for (const tag of blog.tags) {
    if (!alreadyIncluded.has(tag)) {
      availableTags.push(tag);
      alreadyIncluded.add(tag);
    }
  }
}

export { blogs, availableTags };
