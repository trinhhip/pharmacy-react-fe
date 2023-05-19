const nextSettings = {
    optimizeFonts: false,
    //crossOrigin: "anonymous",
    env: {
        apiEndpoint : process.env.NEXT_PUBLIC_API_ENDPOINT,
        title: "MyMedi",
        titleDescription: "React Ecomerce template with RESTFul API",
        appSecret : process.env.NEXT_PUBLIC_APP_SECRECT
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = nextSettings;
