//
//  ViewController.swift
//  WeexDemoSwift
//
//  Created by PonyMuch on 2018/3/12.
//  Copyright © 2018年 PonyMuch. All rights reserved.
//

import UIKit
import WeexSDK

class ViewController: UIViewController {
    
    var instance: WXSDKInstance!
    
    var weexView: UIView?

    override func viewDidLoad() {
        super.viewDidLoad()
        instance = WXSDKInstance()
        
        instance.viewController = self
        
        instance.frame = self.view.frame
        
        instance.onCreate = { [unowned self] view in
            self.weexView?.removeFromSuperview()
            self.weexView = view
            self.view.addSubview(self.weexView!)
        }
        
        /*
        instance.onFailed = { [unowned self] error in
            //process failure
            print("process failure")
        }
        
        instance.refreshFinish = { [unowned self] view in
            //process renderFinish
            print("process renderFinish")
        }
        */
        
        let url = Bundle.main.url(forResource: "HelloWorld", withExtension: "js")
        instance.render(with: url)
        
    }
    
    deinit {
        instance.destroy()
    }

}

