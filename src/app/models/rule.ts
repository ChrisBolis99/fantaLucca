import { RulesKind } from "../enum/rules-kind";

export interface Rule {
    text: string,
    points: number,
    type: RulesKind
}
