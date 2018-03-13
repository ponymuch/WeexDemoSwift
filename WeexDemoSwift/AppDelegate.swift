//
//  AppDelegate.swift
//  WeexDemoSwift
//
//  Created by PonyMuch on 2018/3/12.
//  Copyright © 2018年 PonyMuch. All rights reserved.
//

import UIKit
import WeexSDK

@UIApplicationMain

class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        
        WXAppConfiguration.setAppGroup("Github")
        WXAppConfiguration.setAppName("WeexDemoSwift")
        WXAppConfiguration.setAppVersion("1.0.0")
        
        WXSDKEngine.initSDKEnvironment()
        
        /*
        WXSDKEngine.registerComponent("MyView", with: ViewController.classForCoder())
        
        WXSDKEngine.registerModule("event", with: nil)
        
        WXSDKEngine.registerHandler(nil, with: WXNavigationProtocol)
        */
        
        WXLog.setLogLevel(.off)
        
        return true
        
    }

}

