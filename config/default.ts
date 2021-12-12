export default{
    port: 5000,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAP7y/Diuff4YScBwABAcnZhI6
DN+6v1nt67jS3ZzP75qRf6rK+pFQ5nnZpC3iSqjUvoWAoe3/2Q6YHkabanuyeykD
J9WGGFCBjPDj0p22GGhzgvnnu7yVkV8JYzc/s/zXjCCgotf++JtUS9ADS+CJD4t6
iv6CuLGqgL3DuDrbtQIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCAP7y/Diuff4YScBwABAcnZhI6DN+6v1nt67jS3ZzP75qRf6rK
+pFQ5nnZpC3iSqjUvoWAoe3/2Q6YHkabanuyeykDJ9WGGFCBjPDj0p22GGhzgvnn
u7yVkV8JYzc/s/zXjCCgotf++JtUS9ADS+CJD4t6iv6CuLGqgL3DuDrbtQIDAQAB
AoGARZhQ6Kzb51Xgf6juyONmrm6pfW73CfRE7ON6DJPOQNiZXFOXb0bCDNDFVuHN
NHunWqt47vDwomI7lTj4v+Xs8Y1Ru0ppuCEk6jY2By6hMTlgca52mtmSIs0sifDz
hWeYitANJgm4l0f4NUznaXgGNn1BijOJPzIuytv2+27+3AECQQC291EV0JNmHODa
FZuNH3HTN8K88PEjKfZHbA1vWgWOGz2rFbw/a225uxCZNi4z+/mrWu5bmRl2Ebkq
vruZmO5BAkEAs3EQoEdxIpLosBc4OptR7bReUVzxhvG5LctQRuwChqQcQA9tKf3Z
tsZBTMEeNAapc/fUN8dnRxLKiByiqsf4dQJBAJjU11dohWc7YhrpB6kHBhZPsowO
mu4rg/u+5y4HPTKp0IZTPo6fFuWYu1Gvb0KfDLs01nuO1DTKsyhgb+XqV8ECQAwC
/ozsG1uoH+FhvIbXzNUvpLynjxdsaOvy1y3YMJcYtzdmkPUlpARDIy3jI4VyCLfV
mCQfuf8c9+fCmvT5q90CQD2zbi4pCZdPNetbtxskcwd1+pPqx9KXFIvAJ5TA4mka
PZeFej1PMvp2q2BxUpSedQflMzppgu+l47kq0f0DHx8=
-----END RSA PRIVATE KEY-----`,
}