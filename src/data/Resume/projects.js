import {GithubOutlined} from "@ant-design/icons";

const projects = [
    {
        name: 'MicroHub: Integrated Microservices Ecosystem',
        startDate: '2024-01-01',
        endDate: '2024-04-01',
        summary: [
        'Develop and deploy a series of microservices in <b>Go (Golang)</b>, including Front End, Authentication, Logging, Listener, Broker, and Mail services, employing <b>Postgres</b> and <b>MongoDB</b> for database management.',
        'Implement inter-service communication via REST APIs, gRPC, and AMQP using <b>RabbitMQ</b>, optimizing data flow and service interoperability within a distributed application architecture.',
        'Orchestrate containerized microservices deployment using <b>Docker Swarm</b> and <b>Kubernetes</b>, enabling efficient scaling, and updating of services with minimal downtime.'
        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:''
    },
    {
        name: 'JavaBeans Forum: Interactive Coffee Community Platform',
        startDate: '2023-04-01',
        endDate: '2023-08-01',
        summary: [
        'Developed a comprehensive forum application using <b>Spring Boot</b> that featured email-based registration, MD5 password hashing with salting, dynamic captcha validation, post & comment creation, chat, and sensitive word filtering.',
        'Implemented user authentication by issuing login credentials stored in <b>Redis</b>, integrated <b>Spring Security</b> for user registration and password encryption, and utilized Thread Local to store user data facilitating distributed deployment.',
        'Implemented the full-text search with <b>Elasticsearch</b> and executed global search functionality with + IK tokenizer; used <b>Kafka</b> for real-time notifications and post synchronization.',
        'Optimized server performance by 60% through a multi-tier caching strategy using <b>Caffeine</b> and utilized <b>Quartz</b> for distributed tasks like hot post ranking computation.'
        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:'https://github.com/SongtingY/nowcoderBackend'
    },
    {
        name: 'PressPulse: Dynamic Press Release Engagement Tool',
        startDate: '2022-05-01',
        endDate: '2022-07-01',
        summary: [
            'Developed a user-friendly interface for press release system that enabled users to access, distribute press releasee and press traffic visualization with React and JavaScript.',
            'Provided responsive web design using <b>React</b> with Ant Design, including features of search inventory, customizing press release layout for different types of medias and visualization.',
            'Integrated <b>D3.js</b> for interactive data visualization; Utilized <b>Redux Toolkit</b> to manage application states and to handle asynchronous redux actions.',
            'Utilized <b>Amazon DynamoDB</b> for efficient and serverless data storage, enabling real-time press release updates and access',
            'Leveraged on <b>Amazon EC2</b> instances to gain flexible server capacity that scales automatically to meet user demand.'

        ],
        icon: <GithubOutlined style={{ fontSize: '23px'}}/>,
        link:'https://github.com/SongtingY/Personal-website'
    },
    {
        name: 'House Pricing Clustering and Prediction',
        startDate: '2022-04-01',
        endDate: '2022-05-01',
        summary: [
            'Led team of 4: organized meetings, delegated tasks, coding and debugging, etc. Outperformed peers in class.',
            'Preprocessed large data (1460 records, 80 variables) and dealt with missing values and outliers NumPy pandas. Performed correlation analysis to filter the 15 most relevant variables.',
            'Compared various evaluation metrics for 6 algorithms - <b>KNN, Random Forest Regression, Gaussian, Catboost, XGBoost, and SVM</b>. Selected the 4 most optimal ensembled models that achieved 0.13 MSE in prediction.'
        ],
    },
    {
        name: 'McDonald Valuation',
        startDate: '2022-04-01',
        endDate: '2022-05-01',
        summary: [
            'Utilized Microsoft Excel to create a fully functioning 3-statement financial model with large historical and projected data. ',
            'Evaluated key assumptions to stress test the feasibility of financial models for lending or investment purposes. Projected the <b> income statement, balance sheet & Calculations</b>',
            'Calculated Trading & Transaction Comparables, and built the <b>Discounted Cash Flow (DCF)</b> model from the Cash Flow Statement. Determined whether a Company is trading above or below its intrinsic value <b> Analysis at Various Prices (AVP)</b>'
        ],
    },
    {
        name: 'Merge And Acquisition Consulting Project	 ',
        startDate: '2021-11-01',
        endDate: '2022-01-01',
        summary: [
            "Studied the M&A transaction case of Morgan Stanley and E * Trade, analyzed the purchase price, transaction volume, and structure, synergy generated, and drafted the summarized memo ",
            "Conducted commercial due diligence of target companies, analyzed the fintech industry, and completed the industry research report, including E-trades’ products and competitive advantages ",
            "Performed financial due diligence, calculated EBITDA, EBITDA multiples, and enterprise value, conduct comparable analysis to complete valuation of the target firm, and provide investment and purchase decision rationales"
        ],
    }

];

export default projects;