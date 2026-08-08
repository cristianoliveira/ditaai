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
          ];

          shellHook = ''
            echo "dita dev shell ready"
            echo "run: just --list"
          '';
        };
      });
}
