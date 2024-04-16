/* eslint-disable no-multi-str */
const data = {
    faqs: [

        // Copy and paste the following template 
        // for new Q/A entries 
        /*
                {
                    question: "",
                    category: "Meshery Playground",
                    answer: [
                        "",
                        "",
                    ],
                },
        */

        {
            question: "Why do I need to sign-up/register to use the Cloud Native Playground?",
            category: "Meshery Playground",
            answer: [
                "The Playground is connected to live Kubernetes clusters, and while these clusters are refreshed on a daily basis, the clusters do need to be protected from nefarious actors, who might use these clusters for cryptomining, for example.",
                "Sign-up to receive a user account, entitled with perpetually free and full access the Playground environment.",
                "The Meshery Playground is connected to live Kubernetes cluster(s) and allows users full-control over those clusters. Requiring users to register a user account keeps the Playground safe and healthy for all to enjoy. Without requiring users to sign-in, the Meshery Playground would allow anonymous access for anyone and everyone to potentially perform nefarious acts.",
            ],
        },
        {
            question: "Will I lose my Meshery designs in the Cloud Native Playground?",
            category: "Meshery Playground",
            answer: [
                "No, all of the designs that you have created in the Meshery Playground are saved to your user account and will be available to you each time that you sign into your account. Your designs will be available in the Meshery Playground and any your other Meshery deployments, too.",
                "In other words, all work done in MeshMap Designer is persisted to your user account.",
            ],
        },
        {
            question: "Will I lose my Meshery deployments in the Cloud Native Playground?",
            category: "Meshery Playground",
            answer: [
                "Yes, the Meshery Playground clusters are reset on a daily basis. However, only deployments (not designs) that you may have created will be lost.",
                "In other words, only MeshMap Visualizer is reset. All of your work in Meshery UI and MeshMap Designer will remain in your user account.",
            ],
        },
        {
            question: "Is Meshery open source?",
            category: "Meshery Playground",
            answer: [
                "Yes, Meshery is a Cloud Native Computing Foundation (CNCF) project and is licensed under Apache v2.",
                "As the extensible cloud native manager, Meshery is a pluggable platform, offering multiple extension points within which users and partners (ISVs) can customize and extend Meshery's functionality under the same or different license(s), offering commercial and non-commericial extensions.",
            ],
        },
        // {
        //     question: "What is the difference between the Cloud Native Playground and MeshMap?",
        //     category: "Meshery Playground",
        //     answer: [
        //         "The Cloud Native Playground (aka Meshery Playground) is a managed instance of Meshery that offers a sandbox environment in which half of MeshMap functionality is enabled (Designer mode) and the other half of MeshMap functionality is disabled (Visualizer mode).",
        //         "The sandbox environment is not connected to an active Kuberentes cluster, and as such, depending upon which Meshery Playgrouns environment you use specific actions within MeshMap Designer are also disabled. Meshery and MeshMap are feature-rich, sophisticated management applications for cloud native infrastructure. To access their full set of capabilities, simply deploy your own copy of Meshery into the environment of your choosing.",
        //     ],
        // },
        {
            question: "Are designs that I create in the Meshery Playground saved or will I lose any work that I do in the playground?",
            category: "Meshery Playground",
            answer: [
                "Yes, all of the designs that you have created in the Meshery Playground are saved to your user account and will be available to you each time that you return to the Playground. The designs will also be available in your other Meshery deployments.",
            ],
        },
        {
            question: "Can I deploy the Meshery on-premises?",
            category: "Meshery Playground",
            answer: [
                "Yes, Meshery can be deployed on-premises with a single command to download, install, and run your own instance of Meshery in your environment.",
                "See all supported platforms to deploy your own Meshery instance at https://meshery.io",
            ],
            link: "https://meshery.io",
            linktext: "Get Started with Meshery"
        },
        {
            question: "When I add my Kubernetes cluster to the Meshery Playground will it be available to all other users? Can other people access my cluster?",
            category: "Meshery Playground",
            answer: [
                "No, they can't, unless you explicitly allow them to do so. It's important to understand the following controls and system behavior:",
                "1. Ownership: Every connection to a Kubernetes cluster is created by and owned by the individual that provided the Kubernetes context. That individual may elect to share the connection with others on their team (if you have invited anyone to your team(s)).",
                "2. Permission: If you do grant other team members access, you do so by creating an environment, assigning that Kubernetes connection to the environment, then creating a workspace and assigning that environment to the workspace. Users of any of your teams to which you have shared access to the workspace will then have permission to access the cluster.",
                "3. Connectivity: those individuals will have to be afforded network connectivity to that cluster (in whatever fashion you deem appropriate). There are two ways in which this can occur:",
                "3.a) The other user runs their own copy of Meshery (or signs into a shared instance like the Playground) and will see the connection as being available when they sign in. Their Meshery Server will need to be able to reach your Kube API over the network. How that is done can be any number of ways and is left unto your own devices.",
                ".b) The other user signs into your Meshery Server instance, which has network access to your Kubernetes cluster. In order for the other user to sign into your Meshery Server, you would have to expose it to the Internet or VPN or… one of the many other ways to grant them access to your Meshery Server.",
                "So, in short, you can share access to your Kubernetes cluster with other users, but you have to explicitly grant them access to do so. For more information please visit [Remote Provider Permissions](https://docs.meshery.io/extensibility/authorization)."
            ],
            link: "https://meshery.io",
            linktext: "Get Started with Meshery"
        },
    ]
}

export default data;
