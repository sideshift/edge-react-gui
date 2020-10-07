package co.edgesecure.app;

import android.app.Application;
import android.content.Context;
import android.webkit.WebView;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import cl.json.RNSharePackage;
import co.airbitz.AbcCoreJsUi.AbcCoreJsUiPackage;
import co.airbitz.fastcrypto.RNFastCryptoPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.bugsnag.android.Bugsnag;
import com.bugsnag.android.BugsnagPackage;
import com.chirag.RNMail.RNMail;
import com.cmcewen.blurview.BlurViewPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.krazylabs.OpenAppSettingsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.peel.react.TcpSocketsModule;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.reactlibrary.DiskletPackage;
import com.reactnativecommunity.art.ARTPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.rnfs.RNFSPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.zmxv.RNSound.RNSoundPackage;
import io.expo.appearance.RNCAppearancePackage;
import java.util.Arrays;
import java.util.List;
import org.reactnative.camera.RNCameraPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new BugsnagPackage(),
              new BlurViewPackage(),
              new RNCAppearancePackage(),
              new RNDateTimePickerPackage(),
              new RNLocalizePackage(),
              new ARTPackage(),
              new AsyncStoragePackage(),
              new DiskletPackage(),
              new RNCWebViewPackage(),
              new OpenAppSettingsPackage(),
              new RNMail(),
              new RCTSplashScreenPackage(),
              new AbcCoreJsUiPackage(),
              new RNSoundPackage(),
              new RNSharePackage(),
              new RandomBytesPackage(),
              new RNFastCryptoPackage(),
              new VectorIconsPackage(),
              new TcpSocketsModule(),
              new LinearGradientPackage(),
              new RNFSPackage(),
              new RNDeviceInfo(),
              new ReactNativeContacts(),
              new RNCameraPackage(),
              new ExtraDimensionsPackage());
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Context context = getApplicationContext();

    // @bugsnag/react-native
    Bugsnag.start(this);

    // Disable RTL
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(context, false);

    SoLoader.init(this, /* native exopackage */ false);

    WebView.setWebContentsDebuggingEnabled(true);

    // Background task:
    MessagesWorker.ensureScheduled(context);
    // MessagesWorker.testRun(context);
  }
}
