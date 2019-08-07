#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../games/gcd';
import { playGame } from '../game-process';

playGame(description, getQuestionAndAnswer);
