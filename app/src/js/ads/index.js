import { AdMob, InterstitialAdPluginEvents } from '@capacitor-community/admob';

export async function interstitial() {
  AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info) => {
    // Subscribe prepared interstitial
  });

  const options = {
    adId: 'ca-app-pub-3940256099942544/1033173712',
    // isTesting: true
    // npa: true
  };
  await AdMob.prepareInterstitial(options);
  await AdMob.showInterstitial();
}