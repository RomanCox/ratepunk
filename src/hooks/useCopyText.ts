import {useState} from 'react';

type CopiedValue = string;
type CopyFN = (text: string) => Promise<boolean>;

const useCopyText = (): [CopiedValue, CopyFN] => {
	const [copiedText, setCopiedText] = useState<string>('');

	const copy: CopyFN = async text => {
		if (!navigator?.clipboard) {
			const textarea = document.createElement('textarea');
			textarea.textContent = text;
			textarea.style.position = 'fixed';
			textarea.style.top = '0';
			textarea.style.left = '0';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			try {
				document.execCommand('copy');
				setCopiedText(text);
				return true;
			}
			catch (error) {
				setCopiedText('');
				throw new Error('Copy to clipboard failed');
				return false;
			}
			finally {
				document.removeChild(textarea);
			}
		}

		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			return true;
		}
		catch (error) {
			setCopiedText('');
			throw new Error('Copy to clipboard failed');
			return false;
		}
	};

	return [copiedText, copy];
};

export { useCopyText };