#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../games/even';
import { playGame } from '../game-process';

playGame(description, getQuestionAndAnswer);
