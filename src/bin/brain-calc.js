#!/usr/bin/env node
import game from '../game-process';

import logic from '../logic/logic-brain-calc';

game.playGame(logic, 3);
