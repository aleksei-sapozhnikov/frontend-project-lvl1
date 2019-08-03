#!/usr/bin/env node
import { playGame } from '../game-process';

import logic from '../logic/logic-brain-progression';

playGame(logic, 3);
