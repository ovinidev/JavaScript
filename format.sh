GREEN="\033[1;32m";
BLUE="\033[1;34m";
RESET="\033[0m";

echo -e "${BLUE}> [instalation] Instalation started${RESET}";
sudo apt-get install plank;

echo -e "${BLUE}> [instalation] Instalation flameshot${RESET}";
sudo apt install flameshot

echo -e "${BLUE}> [instalation] Installing VS Code${RESET}";
sudo apt-get install code

echo -e "${BLUE}> [instalation] Installing snapd${RESET}";
sudo rm /etc/apt/preferences.d/nosnap.pref
sudo apt install snapd

echo -e "${BLUE}> [instalation] Installing spotify${RESET}";
sudo snap install spotify

echo -e "${BLUE}> [instalation] Installing google chrome${RESET}";
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

echo -e "${BLUE}> [instalation] Installing discord${RESET}";
sudo snap install discord

echo -e "${BLUE}> [instalation] Installing yarn${RESET}";
curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -



echo -e "${GREEN}> Finished${RESET}";
