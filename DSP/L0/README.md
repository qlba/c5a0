# DSP L0
### Requirements
- Node.js >= 8
- Git
### Installation
```bash
git clone https://github.com/qlba/c5a0.git
cd DSP/L0
npm install
```
### Running
```bash
node ./index.js <N>
```
### Example
```
$ node ./index.js 3
basis:
[ [ 4, 2, 4 ], [ 5, 2, 4 ], [ 5, 6, 3 ] ]
det: 18
normalized basis:
[ [ 0.6666666666666666, 0.3333333333333333, 0.6666666666666666 ],
  [ 0.7453559924999297, -0.2981423969999721, -0.5962847939999442 ],
  [ 4.551312614286668e-16,
    0.8944271909999156,
    -0.4472135954999585 ] ]
phi[1] x phi[1] = 1
phi[1] x phi[2] = -3.885780586188048e-16
phi[1] x phi[3] = -1.6653345369377348e-16
phi[2] x phi[1] = -3.885780586188048e-16
phi[2] x phi[2] = 1
phi[2] x phi[3] = 7.216449660063518e-16
phi[3] x phi[1] = -1.6653345369377348e-16
phi[3] x phi[2] = 7.216449660063518e-16
phi[3] x phi[3] = 1
identity basis:
[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
signal: [ 8, 1, 8 ]
A decomposition: [ 66, 74, 70 ] module: 14732
B decomposition: [ 11, 0.8944271909999122, -2.6832815729997486 ] module: 129
E decomposition: [ 8, 1, 8 ] module: 129
```
