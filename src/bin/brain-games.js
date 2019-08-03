#!/usr/bin/env node
import game from '../game-process';

game.greet();
const name = game.getName();
game.greetByName(name);
