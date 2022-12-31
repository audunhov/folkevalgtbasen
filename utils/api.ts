export const useLoading = () => {

    const isLoading = ref(false);

    async function call(fn: () => any) {
        isLoading.value = true;
        try {
            await fn();
        } catch (e) {
            throw e;
        } finally {
            isLoading.value = false;
        }
    }

    return { isLoading, call };
};