import { WidgetStrategy, WidgetsType } from '@/types/widgets';
import { quizStrategy } from './quizStrategy';
import { trueFalseStrategy } from './trueFalseStrategy';
import { asyncSorterStrategy } from './asyncSorterStrategy';

export class WidgetStrategyRegistry {
  private strategies = new Map<WidgetsType, WidgetStrategy>();

  constructor() {
    this.register(quizStrategy);
    this.register(trueFalseStrategy);
    this.register(asyncSorterStrategy);
  }

  register(strategy: WidgetStrategy) {
    this.strategies.set(strategy.type, strategy);
  }

  getStrategy(type: WidgetsType): WidgetStrategy {
    const strategy = this.strategies.get(type)!;

    return strategy;
  }
}
