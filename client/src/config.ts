export interface IConfig {
    api: string
}

const dev = {
    api: `https://${window.location.hostname}:44372`
}

const prod = {
    api: `https://duelscape-api.whty383.com`
}

export const config: IConfig = process.env.REACT_APP_STAGE === 'prod' ? prod : dev
