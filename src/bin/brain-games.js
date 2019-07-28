#!/usr/bin/env node
import { greet, getName, greetByName } from '..';

greet();
const name = getName();
greetByName(name);
