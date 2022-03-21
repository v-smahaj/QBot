export const environment = {
    production: false,
    apiBaseUrl: "https://qbotsmdel.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotsmdel-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "569188aa-58a1-40d3-bb39-5a0c569ea981",
        clientId: "4d5823f8-27d9-40a8-8ca5-13928de6a2be",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
