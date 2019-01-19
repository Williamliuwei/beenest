import { action, computed, observable } from 'mobx';

class LoadingStore {

    @observable
    private isShowLoading: boolean;

    @computed
    public get gIsShowLoading() {
        return this.isShowLoading;
    }

    @action
    public show() {
        this.isShowLoading = true;
    }

    @action
    public hide() {
        this.isShowLoading = false;
    }
}

export let loadingStore = new LoadingStore();
