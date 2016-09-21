import { Router, NavigationExtras } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';
import { AlertInfo } from '../../shared/index';
import { WrapperInfo } from '../../shared/index';
import { AlertType } from '../../shared/index';
import { NAVIGATOR_INFO } from '../../shared/index';

/**
 * BaseController
 */
export abstract class BaseController {
    private pageInfo: WrapperInfo
    private alertInfo: AlertInfo;

    constructor(private router: Router, private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('vi');
        this.pageInfo = new WrapperInfo(false);
    }

    abstract getCurrentUrl(): string;

    getTranslator(): TranslateService {
        return this.translate;
    }

    navigateTo(url: any[], extras?: NavigationExtras) {
        NAVIGATOR_INFO.push(this.getCurrentUrl());
        this.router.navigate(url, extras);
    }

    navigateBack(extras?: NavigationExtras) {
        let url = NAVIGATOR_INFO.pop();
        this.router.navigate([url], extras);
    }

    showLoading() {
        this.pageInfo.isLoading = true;
    }

    hideLoading() {
        this.pageInfo.isLoading = false;
    }

    alert(alertType: AlertType, message: string) {
        this.alertInfo = new AlertInfo(AlertType[alertType], message);
    }

    onBack() {
        this.navigateBack();
    }
}