/*
 * These styles are injected directly in the component with a <style> tag in order to be able
 * to use container queries
 */
export const weatherAppStyles = `
    .container-parent-webb-app {
        /* padding */
        --pd-xs: 5px;
        --pd-sm: 10px;
        --pd-md: 15px;
        --pd-lg: 20px;
        --pd-xl: 30px;
        --pd-xl: 40px;
        --pd-2xl: 50px;

        --pd-screen: var(--pd-md);
        --pd-fullwidth: 0 5vw;

        --pd-inner-component: var(--pd-lg);

        /* Margins */
        --mg-xs: 5px;
        --mg-sm: 10px;
        --mg-md: 15px;
        --mg-lg: 20px;
        --mg-xl: 30px;
        --mg-xl: 40px;
        --mg-2xl: 50px;

        --mg-between-components: var(--mg-lg);

        /* Sizes */
        --sz-content: 100%;

        /* Colors */
        --c-black: rgb(10, 10, 10);
        --c-font-global: var(--c-black);

        /* Transitions */
        --tr-base: 0.3s;

        /* Colors */
        --bg-main: white;

        /* Fonts */
        --fs-2xl: 2.7rem;
        --fs-xl: 2rem;
        --fs-lg: 1.5rem;
        --fs-base: 1.1rem;
        --fs-sm: 1rem;
        --fs-xs: 0.9rem;

        --fc-dark: hsl(0, 0%, 5%);
        --fc-global: hsl(0, 0%, 20%);
        --fc-light: hsl(0, 0%, 40%);

        --fw-bold: 800;
        --fw-medium: 600;

        /* Background */
        --bg-grey-hover: hsl(0, 0%, 90%);
        --bg-grey-selected: hsl(0, 0%, 85%);

        /* Borders */
        --c-border: hsl(241, 0%, 75%);
        --br-separator: 1px solid var(--c-border);
        --br-r-base: 10px;

        /* Box shadow */
        --input-bs: 4px 1px 13px 4px rgba(0,0,0,0.12);
        --input-bs-focus: 4px 1px 13px 4px rgba(0,0,0,0.17);

        /* Heights */
        --input-height: 50px;
        --row-first-height: 230px;

        /* Transitions */
        --tr-base: 0.3s;

        /* Set element for container queries */
        container-type: inline-size;
    }

    .container-child-webb-app {
        display: grid;
        font-size: var(--fs-base);
        color: var(--fc-global);
        grid-template-columns: 0.6fr 0.4fr;
        grid-gap: var(--pd-md);
    }

    @container (max-width: 1000px) {
        .container-child-webb-app {
            grid-template-columns: 1fr;
        }
    }
`