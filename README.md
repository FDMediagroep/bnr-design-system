<p align="center">
    <a href="https://bnr-design-system.vercel.app" target="_BLANK" rel="noopener noreferrer">
        <img width="160" src="https://github.com/FDMediagroep/bnr-design-system/raw/main/public/assets/icons/logo.svg?sanitize=true" alt="BNR Design System">
    </a>
</p>

<p align="center">
    <span>
        <img src="https://github.com/FDMediagroep/bnr-design-system/actions/workflows/build.yml/badge.svg" alt="Build"/>
    </span>
    <span>
        <img src="https://github.com/FDMediagroep/bnr-design-system/actions/workflows/publish.yml/badge.svg" alt="Publish"/>
    </span>
    <span>
        <img src="https://github.com/FDMediagroep/bnr-design-system/actions/workflows/codeql-analysis.yml/badge.svg" alt="Code Quality"/>
    </span>
    <a href="https://coveralls.io/github/FDMediagroep/bnr-design-system?branch=main" target="_blank" rel="noopener noreferrer">
        <img src="https://coveralls.io/repos/github/FDMediagroep/bnr-design-system/badge.svg?branch=main" alt="Test coverage"/>
    </a>
    <a href="https://npmjs.com/package/@fdmg%2Fbnr-design-system" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/@fdmg/bnr-design-system?color=blue" alt="NPM version"/>
    </a>
    <a href="https://bundlephobia.com/result?p=@fdmg/bnr-design-system" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/bundlephobia/minzip/@fdmg/bnr-design-system" alt="Bundle-size minified+gzip"/>
    </a>
</p>

# BNR Design System

[Design System](https://bnr-design-system.vercel.app) for components used by [BNR.nl](https://bnr.nl).

The Design System is created to be used in the following ways:

-   **Component Library**
    -   Skip to [installation](#installation) if you intend to use it as a Component Library within your own [React](https://reactjs.org/) project. [List of components](#components) and how to use it is described further [below](#components).
-   **Design Documentation**
    -   The [Design Documentation](https://bnr-design-system.vercel.app) is a website which allows you to preview the components. It also documents the design tokens and reasoning behind the designs.
-   **CSS + HTML code generator**
    -   Each component also outputs generated CSS and HTML which you can copy and use stand-alone in your own website. This is useful if you can't or don't want to make use of the Component Library. Just keep in mind that each component CSS generated this way works completely stand-alone and includes all the [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (variables). If you intend to use multiple components then including the CSS Custom Properties only once in your own website is enough. Remember to strip the CSS Custom Properties from subsequent components you add to your website.

## Installation

Install the `Design System` as dependency for your project:

-   NPMJS: `npm i @fdmg/bnr-design-system`

or

-   GitHub Packages: `https://github.com/FDMediagroep/bnr-design-system/packages`

## TypeScript support

TypeDefinitions are available and included.

## Getting started

These are the only steps you need to follow in order to use our components.

1. Import our CSS style(s)
    - It's possible to omit this and use your own styles instead.
    - You can choose to import all styles or styles for each component individually (as shown in the code examples for each component).
1. Import and implement our component(s).
    - You can choose to import components individually (as shown in the code examples for each component) or import main module. Importing components individually allows you to only bundle the components you use.

Example code are listed [below](#components).

## Components

**Global CSS:**

```
import "@fdmg/bnr-design-system/main.css";
```

Contains all the CSS for all the components. It's possible to only include the CSS for each component separately.
The individual imports are shown in the code examples.

**Main component module:**

```
import { ...component... } from "@fdmg/bnr-design-system";
```

The main entry point exports all the available components. This however means your asset bundle will contain all the components regardless of if you actually make use of it.

The reason we publish the library as CommonJS module is because the Webpack build allows for the generation of separate
CSS modules and CommonJS modules for each component. This allows you to only import the JS and CSS for the module that you actually use.
When using Rollup to build our library we can get a proper ESM library which is tree-shakeable however the CSS will be compiled into a single file which forces you to load all the styles of all components regardless of which ones you're using.

So as of the time of writing Webpack still offers the best of both worlds with the minor inconvenience of locating the specific module you want to import.

**React:**

```
import React from 'react';
```

All components import React even though the example codes don't reflect that.

---

### Article

WIP

### Controls

<details>
<summary>Button</summary>

[Demo](https://bnr-design-system.vercel.app/button/default)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/button/Button.css";
```

```
import { Button } from "@fdmg/bnr-design-system/components/button/Button";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <Button onClick={handleClick}>Click me!</Button>
    );
}
```

</details>

<details>
<summary>Button CTA (call-to-action)</summary>

[Demo](https://bnr-design-system.vercel.app/button/cta)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/button/ButtonCta.css";
```

```
import { ButtonCta } from "@fdmg/bnr-design-system/components/button/ButtonCta";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <ButtonCta onClick={handleClick}>Click me!</ButtonCta>
    );
}
```

</details>

<details>
<summary>Button Follow</summary>

[Demo](https://bnr-design-system.vercel.app/button/follow)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/button/ButtonFollow.css";
```

```
import { useState } from 'react';
import { ButtonFollow } from "@fdmg/bnr-design-system/components/button/ButtonFollow";

function Foo() {
    const [follow, setFollow] = useState(false);
    function handleClick() {
        console.log('clicked');
        setFollow(!follow);
    }

    return (
        <ButtonFollow selected={follow} onClick={handleClick}>Click me!</ButtonFollow>
    );
}
```

</details>

<details>
<summary>Ghost Button</summary>

[Demo](https://bnr-design-system.vercel.app/button/ghost)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/button/ButtonGhost.css";
```

```
import { ButtonGhost } from "@fdmg/bnr-design-system/components/button/ButtonGhost";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <ButtonGhost onClick={handleClick}>Click me!</ButtonGhost>
    );
}
```

</details>

<details>
<summary>Play Button</summary>

[Demo](https://bnr-design-system.vercel.app/button/play)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/button/ButtonPlay.css";
```

```
import { ButtonPlay } from "@fdmg/bnr-design-system/components/button/ButtonPlay";

function Foo() {
    const [playing, setPlaying] = useState(false);
    function togglePlay() {
        setPlaying((playState) => !playState);
    }

    return (
        <ButtonPlay onClick={togglePlay} isPlaying={playing}/>
    );
}
```

</details>

<details>
<summary>Checkbox</summary>

[Demo](https://bnr-design-system.vercel.app/input/checkbox)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/Checkbox.css";
```

```
import { Checkbox } from "@fdmg/bnr-design-system/components/input/Checkbox";

function Foo() {
    return (
        <Switch
            id="idOfCheckbox"
            label=`Label of the checkbox`
        />
    );
}
```

</details>

<details>
<summary>Date input</summary>

[Demo](https://bnr-design-system.vercel.app/input/dateinput)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/bnr-design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoDateInput" type="date" label="Birthday" />
    );
}
```

</details>

<details>
<summary>Email input</summary>

[Demo](https://bnr-design-system.vercel.app/input/emailinput)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/bnr-design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoEmailInput" type="email" label="E-mail" pattern={Patterns.EMAIL} required={true} />
    );
}
```

</details>

<details>
<summary>Mobile input (tel)</summary>

[Demo](https://bnr-design-system.vercel.app/input/mobileinput)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/bnr-design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoMobileInput" type="tel" label="E-mail" pattern={Patterns.MOBILE} required={true} />
    );
}
```

</details>

<details>
<summary>Radio</summary>

[Demo](https://bnr-design-system.vercel.app/input/radio)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/Radio.css";
```

```
import { Radio } from "@fdmg/bnr-design-system/components/input/Radio";

function Foo() {
    return (
        <>
            <Radio
                id="idOfRadio"
                name="groupName"
                label=`Label of the radio button`
                defaultChecked={true}
            />
            <Radio
                id="idOfRadio2"
                name="groupName"
                label=`Label of the radio button`
            />
        </>
    );
}
```

</details>

<details>
<summary>Select</summary>

[Demo](https://bnr-design-system.vercel.app/input/select)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/Select.css";
```

```
import { Select } from "@fdmg/bnr-design-system/components/input/Select";

function Foo() {
    return (
        <Select
            id="demoSelect"
            label="Aanhef"
            errorMessage="Kies uw aanhef"
            required={true}
            description="Disabled select field"
        >
            <option value="">-- aanhef --</option>
            <option value="dhr">Dhr.</option>
            <option value="mevr">Mevr.</option>
            <option value="mw">Mw.</option>
            <option value="drs">Drs.</option>
            <option value="Prof">Prof.</option>
        </Select>
    );
}
```

</details>

<details>
<summary>Switch</summary>

[Demo](https://bnr-design-system.vercel.app/input/switch)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/Switch.css";
```

```
import { Switch } from "@fdmg/bnr-design-system/components/input/Switch";

function Foo() {
    return (
        <Switch
            id="idOfSwitch"
            label=`Label of the switch`
        />
    );
}
```

</details>

<details>
<summary>TextArea</summary>

[Demo](https://bnr-design-system.vercel.app/input/textarea)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/TextArea.css";
```

```
import { TextArea } from "@fdmg/bnr-design-system/components/input/TextArea";

function Foo() {
    return (
        <TextArea id="demoTextArea" label="Biography" required={true} />
    );
}
```

</details>

<details>
<summary>Text input</summary>

[Demo](https://bnr-design-system.vercel.app/input/textinput)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/bnr-design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextInput" label="Name" placeholder="Willem Liu" />
    );
}
```

</details>

### Cards

<details>
<summary>Horizontal card 1</summary>

[Demo](https://bnr-design-system.vercel.app/card/horizontal-1)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/card/HorizontalCard1.css";
```

```
import { HorizontalCard1 } from "@fdmg/bnr-design-system/components/card/HorizontalCard1";

function Foo() {
    return (
        <HorizontalCard1 {...cardProps} />
    );
}
```

</details>

<details>
<summary>Vertical card 1</summary>

[Demo](https://bnr-design-system.vercel.app/card/vertical-1)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
import "@fdmg/bnr-design-system/components/card/VerticalCard1.css";
```

```
import { VerticalCard1 } from "@fdmg/bnr-design-system/components/card/VerticalCard1";

function Foo() {
    return (
        <VerticalCard1 {...cardProps} />
    );
}
```

</details>

### Misc.

<details>
<summary>Grid</summary>

The CSS Grid is an external component and can be found here:
[Demo](https://bnr-design-system.vercel.app/grid)
[Source](https://github.com/FDMediagroep/fdmg-css-grid)

</details>

<details>
<summary>Typography</summary>

[Demo](https://bnr-design-system.vercel.app/typography)

Component CSS:

```
import "@fdmg/bnr-design-system/components/design-tokens/design-tokens.css";
```

```
function Foo() {
    return (
        <h1 className="heading sans xs">Heading sans xs</h1>
        <h1 className="heading sans s">Heading sans s</h1>
        <h1 className="heading sans m">Heading sans m</h1>
        <h1 className="heading sans l">Heading sans l</h1>
        <h1 className="heading sans xl">Heading sans xl</h1>
        <h1 className="heading sans xxl">Heading sans xxl</h1>

        <h1 className="heading sans bold xs">Heading sans bold xs</h1>
        <h1 className="heading sans bold s">Heading sans bold s</h1>
        <h1 className="heading sans bold m">Heading sans bold m</h1>
        <h1 className="heading sans bold l">Heading sans bold l</h1>
        <h1 className="heading sans bold xl">Heading sans bold xl</h1>
        <h1 className="heading sans bold xxl">Heading sans bold xxl</h1>

        <h1 className="heading sans slim xs">Heading sans slim xs</h1>
        <h1 className="heading sans slim s">Heading sans slim s</h1>
        <h1 className="heading sans slim m">Heading sans slim m</h1>
        <h1 className="heading sans slim l">Heading sans slim l</h1>
        <h1 className="heading sans slim xl">Heading sans slim xl</h1>
        <h1 className="heading sans slim xxl">Heading sans slim xxl</h1>

        <p className="body-text sans xs">body-text sans xs</p>
        <p className="body-text sans s">body-text sans s</p>
        <p className="body-text sans m">body-text sans m</p>
        <p className="body-text sans l">Reserved</p>
        <p className="body-text sans xl">Reserved</p>
        <p className="body-text sans xxl">Reserved</p>

        <p className="body-text sans bold xs">body-text sans bold xs</p>
        <p className="body-text sans bold s">body-text sans bold s</p>
        <p className="body-text sans bold m">body-text sans bold m</p>
        <p className="body-text sans bold l">Reserved</p>
        <p className="body-text sans bold xl">Reserved</p>
        <p className="body-text sans bold xxl">Reserved</p>

        <p className="body-text sans slim xs">body-text sans slim xs</p>
        <p className="body-text sans slim s">body-text sans slim s</p>
        <p className="body-text sans slim m">body-text sans slim m</p>
        <p className="body-text sans slim l">Reserved</p>
        <p className="body-text sans slim xl">Reserved</p>
        <p className="body-text sans slim xxl">Reserved</p>
    );
}
```

</details>
