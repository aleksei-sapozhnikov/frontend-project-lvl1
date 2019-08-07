#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../games/prime';
import { playGame } from '../game-process';

playGame(description, getQuestionAndAnswer);
