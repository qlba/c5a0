#!/usr/bin/env node

const _ = require('lodash');
const {Matrix} = require('ml-matrix');

const RAND_MAX = 10;

function main()
{
	const N = _.parseInt(process.argv[2]);

	if (!_.isFinite(N) || N < 1)
	{
		console.log(`usage: ${process.argv[0]} ${process.argv[1]} <N>`);
		process.exit(-1);
	}

	const basis = new Matrix(N, N);

	for (let i = 0; i < N; i++)
		for (let j = 0; j < N; j++)
			basis[i][j] = _.random(RAND_MAX, false);

	console.log('basis:');
	console.dir(basis.slice(0, N));

	const det = basis.det();
	
	console.log('det:', det);

	if (det === 0)
	{
		console.log('basis is linearly dependent');
		process.exit(-2);
	}

	const onb = new Matrix(N, N);

	for (let i = 0; i < N; i++)
	{
		onb[i] = basis[i];

		for (let k = 0; k < i; k++)
			onb[i] = subtractVector(onb[i], multiplyVector(onb[k], scalarProduct(basis[i], onb[k]) / scalarProduct(onb[k], onb[k])));
	}

	for (let i = 0; i < N; i++)
		onb[i] = multiplyVector(onb[i], 1 / Math.sqrt(scalarProduct(onb[i], onb[i])));

	console.log('normalized basis:');
	console.dir(onb.slice(0, N));

	for (let i = 0; i < N; i++)
		for (let j = 0; j < N; j++)
			console.log(`phi[${i + 1}] x phi[${j + 1}] =`, scalarProduct(onb[i], onb[j]));

	const identityBasis = Matrix.identity(N);

	console.log('identity basis:');
	console.dir(identityBasis.slice(0, N));

	const signal = new Array(N);

	for (let i = 0; i < N; i++)
		signal[i] = _.random(RAND_MAX, false);

	console.log('signal:', signal);

	const aDecomp = new Array(N);

	for (let i = 0; i < N; i++)
		aDecomp[i] = scalarProduct(signal, basis[i]);

	console.log('A decomposition:', aDecomp, 'module:', scalarProduct(aDecomp, aDecomp));

	const bDecomp = new Array(N);

	for (let i = 0; i < N; i++)
		bDecomp[i] = scalarProduct(signal, onb[i]);

	console.log('B decomposition:', bDecomp, 'module:', scalarProduct(bDecomp, bDecomp));

	const eDecomp = new Array(N);

	for (let i = 0; i < N; i++)
		eDecomp[i] = scalarProduct(signal, identityBasis[i]);

	console.log('E decomposition:', eDecomp, 'module:', scalarProduct(eDecomp, eDecomp));
}

main();


function scalarProduct(xs, ys)
{
	let sum = 0;

	for (let i = 0; i < xs.length; i++)
		sum += xs[i] * ys[i];

	return sum;
}

function subtractVector(xs, ys)
{
	return xs.map((x, i) => x - ys[i]);
}

function multiplyVector(xs, a)
{
	return xs.map(x => a * x);
}
