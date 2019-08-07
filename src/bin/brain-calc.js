#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../games/calc';
import { playGame } from '../game-process';

playGame(description, getQuestionAndAnswer);
