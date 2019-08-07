#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../games/progression';
import { playGame } from '../game-process';

playGame(description, getQuestionAndAnswer);
