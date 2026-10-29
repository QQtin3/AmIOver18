import styles from "@/app/page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>AmIOver18</h1>
			<p className={styles.subtitle}>
				Prove your age without revealing anything else.
			</p>
		</main>
	);
}
