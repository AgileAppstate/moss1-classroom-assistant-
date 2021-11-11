import mosspy

def remote_call(userid = 973241060, files = "submission/a01-*.py", type="python"):


    m = mosspy.Moss(userid, type)

    #m.addBaseFile("submission/a01.py")
    #m.addBaseFile("submission/test_student.py")

    # Submission Files

    m.addFilesByWildcard(files)

    # progress function optional, run on every file uploaded
    # result is submission URL
    url = m.send(lambda file_path, display_name: print('*', end='', flush=True))
    print()

    print ("Report URL: " + url)

    # Save report file
    m.saveWebPage(url, "submission/report.html")

    mosspy.download_report(url, "submission/report/", connections=8, log_level=30, on_read=lambda url: print('*', end='', flush=True))
    # log_level=logging.DEBUG (20 to disable)
    # on_read function run for every downloaded file
    return 0

if __name__ == "__main__":
    remote_call()