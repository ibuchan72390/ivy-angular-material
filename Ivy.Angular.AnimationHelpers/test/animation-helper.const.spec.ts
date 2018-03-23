import 'jasmine';

// Required so we can use array.prototype.find() in PhantomJS
import 'phantomjs-polyfill-find';

import { AnimationTriggerMetadata, AnimationStateMetadata, AnimationTransitionMetadata } from '@angular/animations';

import { AnimationHelper } from '../src/animation-helper.const';

describe('AnimationHelper', () => {

    const key: string = 'Key';
    const speed: number = 1000;

    // genCollapse
    it('genCollapse executes as expected', () => {

        let result: AnimationTriggerMetadata = AnimationHelper.genCollapse(key, speed);

        expect(result.name).toBe(key);

        let stateDefs: AnimationStateMetadata[] = result.definitions
            .filter(x => x.type == 0)
            .map(x => x as AnimationStateMetadata);

        let zeroState = stateDefs.find(x => x.name == '0');
        let zeroStateStyle = zeroState.styles.styles as any;
        expect(zeroStateStyle.height).toBe('0px');

        let oneState = stateDefs.find(x => x.name == '1');
        let oneStateStyle = oneState.styles.styles as any;
        expect(oneStateStyle.height).toBe('*');

        let transitionDefs: AnimationTransitionMetadata[] = result.definitions
            .filter(x => x.type == 1)
            .map(x => x as AnimationTransitionMetadata);

        let zeroToOne = transitionDefs.find(x => x.expr == '0 => 1');
        let zeroToOneAnimation = zeroToOne.animation as any;
        expect(zeroToOneAnimation.timings).toBe(speed + 'ms ease-in');

        let oneToZero = transitionDefs.find(x => x.expr == '1 => 0');
        let oneToZeroAnimation = oneToZero.animation as any;
        expect(oneToZeroAnimation.timings).toBe(speed + 'ms ease-out');
    });


    // genSlideLeft
    it('genSlideLeft executes as expected', () => {

        let result: AnimationTriggerMetadata = AnimationHelper.genSlideLeft(key, speed);

        expect(result.name).toBe(key);

        let stateDefs: AnimationStateMetadata[] = result.definitions
            .filter(x => x.type == 0)
            .map(x => x as AnimationStateMetadata);

        let zeroState = stateDefs.find(x => x.name == '0');
        let zeroStateStyle = zeroState.styles.styles as any;
        expect(zeroStateStyle.transform).toBe('translate3d(0, 0, 0)');

        let oneState = stateDefs.find(x => x.name == '1');
        let oneStateStyle = oneState.styles.styles as any;
        expect(oneStateStyle.transform).toBe('translate3d(-1000%, 0, 0)');

        let transitionDefs: AnimationTransitionMetadata[] = result.definitions
            .filter(x => x.type == 1)
            .map(x => x as AnimationTransitionMetadata);

        let zeroToOne = transitionDefs.find(x => x.expr == '0 => 1');
        let zeroToOneAnimation = zeroToOne.animation as any;
        expect(zeroToOneAnimation.timings).toBe(speed + 'ms ease-in');

        let oneToZero = transitionDefs.find(x => x.expr == '1 => 0');
        let oneToZeroAnimation = oneToZero.animation as any;
        expect(oneToZeroAnimation.timings).toBe(speed + 'ms ease-out');
    });


    // genSlideRight
    it('genSlideRight executes as expected', () => {

        let result: AnimationTriggerMetadata = AnimationHelper.genSlideRight(key, speed);

        expect(result.name).toBe(key);

        let stateDefs: AnimationStateMetadata[] = result.definitions
            .filter(x => x.type == 0)
            .map(x => x as AnimationStateMetadata);

        let zeroState = stateDefs.find(x => x.name == '0');
        let zeroStateStyle = zeroState.styles.styles as any;
        expect(zeroStateStyle.right).toBe('translate3d(0, 0, 0)' );

        let oneState = stateDefs.find(x => x.name == '1');
        let oneStateStyle = oneState.styles.styles as any;
        expect(oneStateStyle.right).toBe('translate3d(1000%, 0, 0)');

        let transitionDefs: AnimationTransitionMetadata[] = result.definitions
            .filter(x => x.type == 1)
            .map(x => x as AnimationTransitionMetadata);

        let zeroToOne = transitionDefs.find(x => x.expr == '0 => 1');
        let zeroToOneAnimation = zeroToOne.animation as any;
        expect(zeroToOneAnimation.timings).toBe(speed + 'ms ease-in');

        let oneToZero = transitionDefs.find(x => x.expr == '1 => 0');
        let oneToZeroAnimation = oneToZero.animation as any;
        expect(oneToZeroAnimation.timings).toBe(speed + 'ms ease-out');
    });
});