export const isWebBtAvailable = () => {
    // return 'bluetooth' in navigator;
    return ('requestDevice' in (navigator as any).bluetooth)
}