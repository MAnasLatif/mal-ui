'use client';

// ─── MALUI-branded aliases for Mantine identifiers ──────────────────────────
// Re-export every Mantine-branded symbol under a MALUI name so consumers can use
// either naming convention. The original Mantine names are still re-exported from index.ts.

import { MantineProvider, type MantineProviderProps } from '@mantine/core';
import {
  NavigationProgressProvider,
  type NavigationProgressProviderProps,
  type ProgressRouterBase,
} from '../nprogress';

// ─── Type aliases ─────────────────────────────────────────────────────────────
export type {
  DefaultMantineColor as DefaultMALUIColor,
  DefaultMantineSize as DefaultMALUISize,
  MantineBreakpoint as MALUIBreakpoint,
  MantineBreakpointsValues as MALUIBreakpointsValues,
  MantineColor as MALUIColor,
  MantineColorScheme as MALUIColorScheme,
  MantineColorSchemeManager as MALUIColorSchemeManager,
  MantineColorShade as MALUIColorShade,
  MantineColorsTuple as MALUIColorsTuple,
  MantineComponent as MALUIComponent,
  MantineComponentStaticProperties as MALUIComponentStaticProperties,
  MantineFontSize as MALUIFontSize,
  MantineFontSizesValues as MALUIFontSizesValues,
  MantineFontWeight as MALUIFontWeight,
  MantineFontWeightsValues as MALUIFontWeightsValues,
  MantineGradient as MALUIGradient,
  MantineLineHeight as MALUILineHeight,
  MantineLineHeightValues as MALUILineHeightValues,
  MantineLoader as MALUILoader,
  MantineLoaderComponent as MALUILoaderComponent,
  MantineLoadersRecord as MALUILoadersRecord,
  MantinePolymorphicComponent as MALUIPolymorphicComponent,
  MantinePrimaryShade as MALUIPrimaryShade,
  MantineRadius as MALUIRadius,
  MantineRadiusValues as MALUIRadiusValues,
  MantineShadow as MALUIShadow,
  MantineShadowsValues as MALUIShadowsValues,
  MantineSize as MALUISize,
  MantineSpacing as MALUISpacing,
  MantineSpacingValues as MALUISpacingValues,
  MantineStyleProp as MALUIStyleProp,
  MantineStyleProps as MALUIStyleProps,
  MantineStylesRecord as MALUIStylesRecord,
  MantineStylesTransform as MALUIStylesTransform,
  MantineTheme as MALUITheme,
  MantineThemeColors as MALUIThemeColors,
  MantineThemeColorsOverride as MALUIThemeColorsOverride,
  MantineThemeComponent as MALUIThemeComponent,
  MantineThemeComponents as MALUIThemeComponents,
  MantineThemeOther as MALUIThemeOther,
  MantineThemeOverride as MALUIThemeOverride,
  MantineThemeProviderProps as MALUIThemeProviderProps,
  MantineThemeSizesOverride as MALUIThemeSizesOverride,
  MantineTransition as MALUITransition,
} from '@mantine/core';
export {
  HeadlessMantineProvider as HeadlessMALUIProvider,
  isMantineColorScheme as isMALUIColorScheme,
  // ─── Provider / Context ─────────────────────────────────────────────────────
  MantineContext as MALUIContext,
  MantineThemeProvider as MALUIThemeProvider,
  // ─── Theme utilities ────────────────────────────────────────────────────────
  mantineHtmlProps as MALUIHtmlProps,
  mergeMantineTheme as mergeMALUITheme,
  useMantineClassNamesPrefix as useMALUIClassNamesPrefix,
  useMantineColorScheme as useMALUIColorScheme,
  useMantineContext as useMALUIContext,
  useMantineCssVariablesResolver as useMALUICssVariablesResolver,
  useMantineDeduplicateInlineStyles as useMALUIDeduplicateInlineStyles,
  useMantineEnv as useMALUIEnv,
  useMantineIsHeadless as useMALUIIsHeadless,
  useMantineStyleNonce as useMALUIStyleNonce,
  useMantineStylesTransform as useMALUIStylesTransform,
  useMantineSxTransform as useMALUISxTransform,
  // ─── Hooks (core-level) ─────────────────────────────────────────────────────
  useMantineTheme as useMALUITheme,
  useMantineWithStaticClasses as useMALUIWithStaticClasses,
  useSafeMantineTheme as useSafeMALUITheme,
  validateMantineTheme as validateMALUITheme,
} from '@mantine/core';

// ─── MALUIProvider ──────────────────────────────────────────────────────────
// Wraps Mantine's provider and optionally mounts navigation progress. Pass
// `router` (or `navigationProgress`) to auto-render NavigationProgressProvider —
// no need to add it manually. Without either prop it behaves like MantineProvider.
export interface MALUIProviderProps extends MantineProviderProps {
  /** Router for progress-aware `useRouter()`; presence enables the bar. */
  router?: ProgressRouterBase;
  /** Enable/configure navigation progress. `true` for defaults, or bar props. */
  navigationProgress?: boolean | Omit<NavigationProgressProviderProps, 'router' | 'children'>;
}

export function MALUIProvider({
  router,
  navigationProgress,
  children,
  ...others
}: MALUIProviderProps) {
  const enableProgress =
    router != null || (navigationProgress != null && navigationProgress !== false);
  const barProps = typeof navigationProgress === 'object' ? navigationProgress : undefined;

  return (
    <MantineProvider {...others}>
      {enableProgress ? (
        <NavigationProgressProvider router={router} {...barProps}>
          {children}
        </NavigationProgressProvider>
      ) : (
        children
      )}
    </MantineProvider>
  );
}
