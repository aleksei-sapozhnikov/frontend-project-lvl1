#!/usr/bin/env node
import { greet, getName, greetByName } from '../game-process';

greet();
const name = getName();
greetByName(name);
