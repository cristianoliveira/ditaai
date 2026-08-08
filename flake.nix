{
  description = "Dita — Chrome extension with local Piper TTS";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            git
            just
            nodejs_22
            pnpm
            # Playwright browser binaries — pinned by nix, no npx install needed.
            # @playwright/test npm version must match this driver version.
            playwright.browsers
          ];

          PLAYWRIGHT_BROWSERS_PATH = "${pkgs.playwright.browsers}";

          shellHook = ''
            echo "dita dev shell ready"
            echo "playwright browsers: ''${PLAYWRIGHT_BROWSERS_PATH}"
            echo "run: just --list"
          '';
        };
      });
}
