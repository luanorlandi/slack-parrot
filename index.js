#!/usr/bin/env node

const frames = require('./src/frames');
const colors = require('./src/colors');

const delay = 60;
const lineCount = 19;
let currentFrame = 0;
let currentColor = 0;

function changeFrame() {
  currentFrame += 1;
  currentColor += 1;

  if (currentFrame === frames.length) {
    currentFrame = 0;
  }

  if (currentColor === colors.length) {
    currentColor = 0;
  }

  const frame = frames[currentFrame];
  const color = colors[currentColor];

  process.stdout.moveCursor(0, -lineCount);
  process.stdout.write(color(frame));

  setTimeout(changeFrame, delay);
}

function run() {
  process.stdout.write(frames[currentFrame]);
  setTimeout(changeFrame, delay);
}

if (!module.parent) {
  run();
}
