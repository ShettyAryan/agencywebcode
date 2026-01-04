
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import tailwindcss from "@tailwindcss/vite";
  import path from 'path';

  export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        "vaul@1.1.2": "vaul",
        "sonner@2.0.3": "sonner",
        "recharts@2.15.2": "recharts",
        "react-resizable-panels@2.1.7": "react-resizable-panels",
        "react-hook-form@7.55.0": "react-hook-form",
        "react-day-picker@8.10.1": "react-day-picker",
        "next-themes@0.4.6": "next-themes",
        "lucide-react@0.487.0": "lucide-react",
        "input-otp@1.4.2": "input-otp",
        "figma:asset/ccd235adb633fc38796cfce3eb01c5a4cca71c79.png":
          path.resolve(
            __dirname,
            "./src/assets/ccd235adb633fc38796cfce3eb01c5a4cca71c79.png"
          ),
        "figma:asset/c6312101b508e020b1af49fbf6d06ab49490206b.png":
          path.resolve(
            __dirname,
            "./src/assets/c6312101b508e020b1af49fbf6d06ab49490206b.png"
          ),
        "figma:asset/adbbe32d08e5fda08c694cd3e03f9b66077d4fb7.png":
          path.resolve(
            __dirname,
            "./src/assets/adbbe32d08e5fda08c694cd3e03f9b66077d4fb7.png"
          ),
        "figma:asset/a8551fa71dd7346c09f555df34a43f53d41dba74.png":
          path.resolve(
            __dirname,
            "./src/assets/a8551fa71dd7346c09f555df34a43f53d41dba74.png"
          ),
        "figma:asset/9333dbfd96156981d7444169ea92aa972ca6be65.png":
          path.resolve(
            __dirname,
            "./src/assets/9333dbfd96156981d7444169ea92aa972ca6be65.png"
          ),
        "figma:asset/8ae6b78145a41c7d4490b529e1350c7a15c1c2b0.png":
          path.resolve(
            __dirname,
            "./src/assets/8ae6b78145a41c7d4490b529e1350c7a15c1c2b0.png"
          ),
        "figma:asset/8410421760a1d164d08527cf8780ec84c55aa884.png":
          path.resolve(
            __dirname,
            "./src/assets/8410421760a1d164d08527cf8780ec84c55aa884.png"
          ),
        "figma:asset/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png":
          path.resolve(
            __dirname,
            "./src/assets/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png"
          ),
        "figma:asset/43f4044d43b1739763c114f8ca8c5140b85e2cbd.png":
          path.resolve(
            __dirname,
            "./src/assets/43f4044d43b1739763c114f8ca8c5140b85e2cbd.png"
          ),
        "figma:asset/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png":
          path.resolve(
            __dirname,
            "./src/assets/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png"
          ),
        "embla-carousel-react@8.6.0": "embla-carousel-react",
        "cmdk@1.1.1": "cmdk",
        "class-variance-authority@0.7.1": "class-variance-authority",
        "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
        "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
        "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
        "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
        "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
        "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
        "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
        "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
        "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
        "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
        "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
        "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
        "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
        "@radix-ui/react-navigation-menu@1.2.5":
          "@radix-ui/react-navigation-menu",
        "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
        "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
        "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
        "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
        "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
        "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
        "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
        "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
        "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
        "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
        "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "esnext",
      outDir: "build",
    },
    server: {
      port: 3000,
      open: true,
    },
  });