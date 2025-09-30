import { ScoresGroup } from "../enum/scores-group";

export interface Rule {
    text: string,
    points: number,
    type: ScoresGroup
}
