/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    leagueId: 593322,
    espnS2: "AECVuzNF6Rszp7pYObE%2FuoH3T%2FiF9zPfqrRghccHjhNoViMV12nlGAZIEpZYX2rL14x3SLF8lOy3VDarmwsl3v3Tvs4%2Fi6e%2FAxhQHW4osbkMbN6BwqenwO1ha2I4dXzW1RBrhJWbZNeC4PU8GVXC3ZGvc9bxwZwUYDutyYJrmkd4zMuJzNqNoHHSXYuh4niI8a%2FPUF%2Ft%2BOCXii7uGJoNn7AUWyRcyAfxcS%2FGf2SMgw7IEPxyuqJHfhdQhI2JRVjDqIMn4yKDEbhfcoolSPb%2FWkV3HRSl5Zzh5kht5W7ExiC3EAfykmwGNjd5Cx0%2Fz9WB2Cw%3D",
    SWID: "FD2D3F2A-7017-48F2-B67D-BDC329F56761",
    seasonId: 2022
  }
}

module.exports = nextConfig
